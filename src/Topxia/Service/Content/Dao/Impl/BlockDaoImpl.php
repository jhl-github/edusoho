<?php

namespace Topxia\Service\Content\Dao\Impl;

use Topxia\Service\Common\BaseDao;
use Topxia\Service\Content\Dao\BlockDao;

class BlockDaoImpl extends BaseDao implements BlockDao
{
    protected $table = 'block';

    public $serializeFields = array(
        'meta' => 'json',
        'data' => 'json'
    );

    public function getBlock($id)
    {
        $that = $this;

        return $this->fetchCached("id:{$id}", $id, function ($id) use ($that) {
            $sql = "SELECT * FROM {$that->getTable()} WHERE id = ? LIMIT 1";
            $block = $that->getConnection()->fetchAssoc($sql, array($id));
            return $block ? $that->createSerializer()->unserialize($block, $that->serializeFields) : null;
        }

        );
    }

    public function getBlockByTemplateIdAndOrgId($blockTemplateId,$orgId=0)
    {
        $sql = "SELECT * FROM {$this->table} WHERE blockTemplateId = '{$blockTemplateId}' AND orgId =  '{$orgId}' ";
        $block = $this->getConnection()->fetchAssoc($sql, array($blockTemplateId,$orgId));

        return $block ? $this->createSerializer()->unserialize($block, $this->serializeFields) : null;
    }

    public function getBlockByTemplateId($blockTemplateId)
    {
        $sql = "SELECT * FROM {$this->table} WHERE blockTemplateId = '{$blockTemplateId}'";
        $block = $this->getConnection()->fetchAssoc($sql, array($blockTemplateId));

        return $block ? $this->createSerializer()->unserialize($block, $this->serializeFields) : null;
    }

    public function searchBlockCount($condition)
    {
        $sql = "SELECT COUNT(*) FROM {$this->table}";

        if (isset($condition['category']) && !$this->isSortField($condition)) {
            $sql .= " where category = '{$condition['category']}'";
        }

        return $this->getConnection()->fetchColumn($sql, array());
    }
    
    protected function createBlockQueryBuilder($conditions)
    {
        $conditions = array_filter($conditions, function ($v) {
            if ($v === 0) {
                return true;
            }

            if (empty($v)) {
                return false;
            }

            return true;
        }

        );

        if (isset($conditions['title'])) {
            $conditions['title'] = "%{$conditions['title']}%";
        }

        return $this->createDynamicQueryBuilder($conditions)
                    ->from($this->table, 'block')
                    ->andWhere('category = :category')
                    ->andWhere('title LIKE :title');
    }

    protected function isSortField($condition)
    {
        if (isset($condition['category']) && $condition['category'] == 'lastest') {
            return true;
        }

        return false;
    }

    public function addBlock($block)
    {
        if (isset($block['blockId']))
         {
            unset($block['blockId']);
        }
        $this->createSerializer()->serialize($block, $this->serializeFields);
        $affected = $this->getConnection()->insert($this->table, $block);
        $this->clearCached();

        if ($affected <= 0) {
            throw $this->createDaoException('Insert block error.');
        }

        return $this->getBlock($this->getConnection()->lastInsertId());
    }

    public function deleteBlock($id)
    {
        $result = $this->getConnection()->delete($this->table, array('id' => $id));
        $this->clearCached();
        return $result;
    }

    public function getBlockByCode($code,$orgId=0)
    {
        $sql = "SELECT * FROM {$this->table} WHERE code = '{$code}' AND orgId =  '{$orgId}' ";
        $block = $this->getConnection()->fetchAssoc($sql, array($code,$orgId));

        return $block ? $this->createSerializer()->unserialize($block, $this->serializeFields) : null;
    }

    public function findBlocks($conditions, $orderBy, $start, $limit)
    {
        if (!isset($orderBy) || empty($orderBy)) {
            $orderBy = array('createdTime', 'DESC');
        }

        $this->filterStartLimit($start, $limit);
        $builder = $this->createBlockQueryBuilder($conditions)
                        ->select('*')
                        ->orderBy($orderBy[0], $orderBy[1])
                        ->setFirstResult($start)
                        ->setMaxResults($limit);
        $blocks = $builder->execute()->fetchAll() ?: array();
        return $blocks ? $this->createSerializer()->unserializes($blocks, $this->serializeFields) : array();
    }

    public function updateBlock($id, array $fields)
    {
        if (isset($fields['blockId']))
         {
            unset($fields['blockId']);
        }
        $this->createSerializer()->serialize($fields, $this->serializeFields);
        $this->getConnection()->update($this->table, $fields, array('id' => $id));
        $this->clearCached();
        return $this->getBlock($id);
    }
}

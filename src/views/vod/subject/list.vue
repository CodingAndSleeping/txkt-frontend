<template>
  <div class="app-container">
    <el-table
      :data="list"
      style="width: 100%"
      row-key="id"
      border
      lazy
      :load="load"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="title" label="名称" width="150" />
      <el-table-column prop="createTime" label="创建时间" />
    </el-table>
  </div>
</template>

<script>
import { getChildList } from '@/api/vod/subject'
export default {
  data() {
    return {
      list: [] // 数据字典列表数组
    }
  },
  created() {
    this.getSubList(0)
  },
  methods: {
    // 数据字典列表
    getSubList(id) {
      getChildList(id).then((response) => {
        console.log(response)
        this.list = response.data
      })
    },
    load(tree, treeNode, resolve) {
      getChildList(tree.id).then((response) => {
        resolve(response.data)
      })
    }
  }
}
</script>

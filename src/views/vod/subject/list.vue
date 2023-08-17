<template>
  <div class="app-container">

    <div class="el-toolbar">
      <div class="el-toolbar-body" style="justify-content: flex-start;">
        <el-button type="text" @click="exportData"><i class="fa fa-plus" /> 导出</el-button>
      </div>
    </div>
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
import { getChildList, exportData } from '@/api/vod/subject'
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
    },

    exportData() {
      exportData().then(res => {
        // 直接返回来就是blob数据
        if (res) {
          const xlsx = 'application/vnd.ms-excel'
          const blob = new Blob([res], { type: xlsx })
          const a = document.createElement('a') // 转换完成，创建一个a标签用于下载
          a.download = 'fileName.xls'
          a.href = window.URL.createObjectURL(blob)
          a.click()
          a.remove()
        } else {
          this.$message.error('导出失败')
        }
      })
    }
  }
}
</script>

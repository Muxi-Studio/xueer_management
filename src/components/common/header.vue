<template>
  <div class="header">
      <slot name="title"></slot>
      <slot name="buttons"></slot>
    </div>
</template>
<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  background-color: rgb(242, 242, 242);
  padding: 0 40px;
  align-items: center;
  box-shadow: 0 0 10px 0 gray;
  height: 64px;
}
.buttons {
  display: flex;
  justify-content: flex-end;
}

.m_button {
  margin: 0 20px;
}

.title {
  line-height: 80px;
  font-size: 20px;
  color: #757575;
}

.list {
  padding: 20px;
}
</style>

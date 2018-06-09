<template>
	<div  class="loading">
	    <div class="boxes space">
	        <div class="box left"></div>
	        <div class="box middle"></div>
	        <div class="box right"></div>
	    </div>
	 </div>
</template>
<script>
export default {};
</script>
<style lang='scss'>
.loading {
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
}
.boxes {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% -50%);
}
.box {
  display: inline-block;
  height: 14px;
  width: 14px;
  margin-right: 28px;
  vertical-align: top;
  background-color: #2bbb8f;
  -webkit-animation: loading_box_ani 1s infinite;
  animation: loading_box_ani 1s infinite;
}
.middle {
  animation-delay: 0.33s;
}
.right {
  animation-delay: 0.66s;
  margin-right: 0;
}
@keyframes loading_box_ani {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(2);
  }
}
</style>

<template>
    <div>
        <div> <!--v-if 是dom的渲染与否，而v-show是dom都渲染，只是css控制隐藏和展示-->
            <input type="button" value="test if" @click="change">
            <div v-if="ifshow">
                <div>2222222222222222222222</div>
            </div>
            <div v-show="!ifshow">
                <div>11111111111111111111111</div>
            </div>
        </div>
        <hr/>
        <div> <!--v-if 是dom的渲染与否，而v-show是dom都渲染，只是css控制隐藏和展示-->
            <input type="button" value="test if" @click="change">
            <div v-if="ifshow">
                <div>2222222222222222222222</div>
            </div>
            <div v-else>
                <div>11111111111111111111111</div>
            </div>
        </div>
        <hr/>
        <div> <!--v-if 是dom的渲染与否，而v-show是dom都渲染，只是css控制隐藏和展示-->
            <input type="button"  value="tab0" @click="changeTab(0)">
            <input type="button" value="tab1" @click="changeTab(1)">
            <input type="button" value="tab2" @click="changeTab(2)">
            <input type="button" value="tab3" @click="changeTab(3)">
            <div v-if="tab==0">
                <div>0000000000000000000000</div>
            </div>
            <div v-else-if="tab==1">
                <div>11111111111111111111111</div>
            </div>
            <div v-else-if="tab==2">
                <div>222222222222222222222222222</div>
            </div>
            <div v-else-if="tab==3">
                <div>333333333333333333333333333</div>
            </div>
        </div>

    </div>
</template>

<script>
    const data = {
        ifshow:true,
        tab:0
    }
    export default {
        name: "VueApp",
        data(){
            return data;
        },
        methods:{
            change(){
                this.ifshow = !this.ifshow
            },
            changeTab(e){
                this.tab = e;
            }
        }
    }
</script>

<style scoped>

</style>
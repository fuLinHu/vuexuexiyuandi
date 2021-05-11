<template>
    <div>
        测试路径传递参数值: {{sendDaram}}
        <br>
        测试query递参数值: {{queryParam}}
        <br>
        测试button递参数值: {{buttonParam}}

    </div>
</template>

<script>
    export default {
        name: "AboutSonParam",
        computed:{
            sendDaram:{
                get(){
                    return this.$route.params.param;
                }
            },
            queryParam:{
                get(){
                    return this.$route.query;
                }
            }
            ,
            buttonParam:{
                get(){
                    return this.$route.query;
                }
            }
        }
    }
</script>

<style scoped>

</style>
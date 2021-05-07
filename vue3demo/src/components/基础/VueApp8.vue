<template>
    <div>
     <input type="text" v-model="mes" />
    {{mes}}
    <input type="text" v-model.lazy="mes" />
    {{mes}}
        <!--如果想自动将用户的输入值转为 Number 类型（如果原值的转换结果为 NaN 则返回原值），可以添加一个修饰符 number 给 v-model 来处理输入值：

        <input v-model.number="age" type="number">
        这通常很有用，因为在 type="number" 时 HTML 中输入的值也总是会返回字符串类型。-->
    <input type="number" v-model.number="mesN" />
    {{mesN}}
        <input type="text" v-model.trim="mes" />
        {{mes}}
    <br/>
    <label for="男">
        <input id="男" type="radio" value="男" v-model="sex">男
    </label>
    <label for="女">
        <input id="女" type="radio" value="女" v-model="sex">女
    </label>
        {{sex}}
    <br/>
        <label for="a">
            <input id="a" type="checkbox" value="java" v-model="likes">JAVA
        </label>
        <label for="b">
            <input id="b" type="checkbox" value="python" v-model="likes">PYTHON
        </label>
        <label for="c">
            <input id="c" type="checkbox" value="go" v-model="likes">GO
        </label>
        {{likes}}
        <br/>
        <select v-model="likess" multiple>
            <option value="java">
                JAVA
            </option>
            <option value="python">
                PYTHONE
            </option>
            <option value="go">
                GO
            </option>
        </select>
        {{likess}}
    </div>
</template>

<script>
    const data = {
        mes:"你好",
        mesN:0,
        sex:"",
        likes:'go',
        likess:'go'

    }
    export default {
        name: "VueApp",
        data(){
            return data;
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
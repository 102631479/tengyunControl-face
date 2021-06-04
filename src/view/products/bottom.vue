<!--
 * @Author: your name
 * @Date: 2020-09-25 09:41:53
 * @LastEditTime: 2020-09-27 11:24:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \open-platform-ui\platform-pc-ui\src\view\products\bottom.vue
 -->
 <template>
     <div class="page normals">
        <p class="contact">联系我们</p>
        <p class="desc">关于适用场景和技术架构的更多咨询，请联系我们的销售和技术支持团队。</p>
        <p class="btn">联系我们</p>
     </div>
 </template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
    .page {
        background-color: #fff;
        background-image: url('../../assets/images/contact-us.jpg');
    }
    .normals {
        padding:80px 733px 60px 733px;
    }
    .contact {
        height: 29px;
        font-size: 30px;
        font-weight: 500;
        color: #020202;
        line-height: 29px;
        text-align: center;
    }
    .desc {
        height: 15px;
        font-size: 13px;
        font-weight: 400;
        color: #020202;
        line-height: 15px;
        margin: 34px 0;
    }
    .btn {
        width: 160px;
        height: 36px;
        background: #00BAFF;
        text-align: center;
        
        font-size: 16px;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 36px;
        margin: 0 auto;
    }
</style>

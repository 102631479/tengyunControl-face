<template>
  <div class="page">
    <div class="page-content">
      <div class="t-center f-size-30 color-02 mt-70">意见反馈</div>
      <div class="f-size-18 color-333 mt-26 t-center">
        您的意见是我们前进的动力，未来我们会做的更好！
      </div>

      <div class="main">
        <div class="flex justify-center mt-50">
          <span class="color-666 mr-18 mt-8">内容描述</span>
          <div class="textarea-box" style="width: 800px">
            <textarea
              placeholder="500字以内"
              maxlength="500"
              v-model="formData.opinionDescription"
            ></textarea>
            <span class="tip"
              >还可以输入{{
                500 - formData.opinionDescription.length
              }}个字母</span
            >
          </div>
        </div>

        <div class="flex align-center mt-50">
          <span class="color-666 mr-20"></span>
          <span class="mr-8 cup">
            <Upload
              ref="upload"
              :max-size="1024 * 2"
              :action="actionUrl"
              accept=".png, .jpeg, .jpg"
              :on-success="fileUploadSuccess"
              :on-remove="fileUploadRemove"
            >
              <Button icon="ios-cloud-upload-outline">上传图片</Button
              ><span class="color-999 f-size-14" style="font-size: 14px">
                单张图片大小不超过2M，最多4张</span
              >
            </Upload>
          </span>
          <span class="color-999 f-size-14"></span>
        </div>

        <div class="img-list">
          <div class="img" v-for="i in formData.photoIdList" :key="i">
            <img src="@/assets/images/close.png" class="close" alt />
          </div>
        </div>

        <div class="submit" @click="submit">提交反馈</div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "@/config";

import { feedback } from "@/api/user";
export default {
  data() {
    return {
      dataList: [],
      actionUrl:
        process.env.NODE_ENV === "development"
          ? config.baseUrl.dev + "/platform-file/file/img/upload"
          : process.env.NODE_ENV === "testing"
          ? config.baseUrl.test + "/platform-file/file/img/upload"
          : config.baseUrl.pro + "/platform-file/file/img/upload",
      formData: {
        sponsorUserId: this.$store.state.user.userInfo.id,
        sponsorUserName: this.$store.state.user.userInfo.userName, // 名字
        opinionDescription: "", // 意见描述
        photoIdList: [],
        annexIdList: [],
      },
    };
  },
  methods: {
    fileUploadRemove(a, c) {
      this.getImg(c);
    },

    fileUploadSuccess(a, s, c) {
      console.log(a);
      this.getImg(c);
    },
    //提交数据
    submit() {
      let statice = this.$store.state.user.userInfo;
      let data = {
        uid: statice.id,
        details: this.formData.opinionDescription,
        userName: statice.userName,
        state: "1",
        states: "1",
        photoIdList: this.photoIdList,
      };
      console.log(data,'提交数据');
      feedback(data)
        .then((d) => {
          console.log(this.$refs.upload, "this.$refs.uploadthis.$refs.upload");
          this.$refs.upload.fileList = [];
          this.photoIdList = [];
          this.$Message.success("提交成功");
          this.reset();
        })
        .catch((err) => this.$Message.error(err.msg));
    },
    getImg(c) {
      if (c.length > 4) {
        this.$Message.error("文件图片超过4张");
        return;
      }
      this.photoIdList = [];
      c.forEach((item) => {
        let data = item.response.data[0];
        this.photoIdList.push({
          ["fileAddress"]: data.fileAddress,
          ["fileId"]: data.id,
          ["oldName"]: data.oldFileName,
        });
      });
      console.log(this.photoIdList);
    },
    reset() {
      this.formData = {
        sponsorUserId: this.$store.state.user.userInfo.id,
        sponsorUserName: this.$store.state.user.userInfo.userName, // 名字
        opinionDescription: "", // 意见描述
        photoIdList: [],
        annexIdList: [],
      };
    },
  },
};
</script>

<style scoped lang="scss">
.page {
  background-color: #fff;
  overflow: hidden;
  min-height: 800px;

  // height: 100%;
  .main {
    width: 893px;
    // border: 1px solid red;
    margin: auto;
    .textarea-box {
      position: relative;
      display: flex;
      textarea {
        width: 811px;
        height: 371px;
        box-sizing: border-box;
        padding: 10px;
        border: 1px solid #d9d9d9;
        outline: none;
      }
      .tip {
        position: absolute;
        right: 10px;
        bottom: 10px;
        color: #999;
        font-size: 12px;
        z-index: 9;
      }
    }

    .btn {
      width: 120px;
      height: 34px;
      // border: 1px solid rgba(0, 132, 255, 1);
      color: rgba(0, 132, 255, 1);
      text-align: center;
      line-height: 34px;
    }

    .img-list {
      display: flex;
      justify-content: space-between;
      margin-left: 84px;
      margin-top: 20px;

      width: 800px;
      .img {
        position: relative;
        width: 184px;
        height: 124px;
        border: 1px solid red;
        .close {
          position: absolute;
          top: -13px;
          right: -13px;
          width: 24px;
          height: 24px;
          cursor: pointer;
        }
      }
    }
    .submit {
      width: 160px;
      height: 34px;
      background: rgba(0, 132, 255, 1);
      color: #fff;
      line-height: 34px;
      text-align: center;
      margin: 50px auto 78px;
      cursor: pointer;
    }
  }
}
</style>

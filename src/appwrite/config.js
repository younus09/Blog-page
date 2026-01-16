import { Client, ID, TablesDB, Storage, Query } from "appwrite";
import conf from "../conf/conf.js";

export class Services {
  client = new Client();
  tablesDB;
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.tablesDB = new TablesDB(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImg, status, userId }) {
    try {
      return await this.tablesDB.createRow({
        databaseId: conf.appwritDataBaseId,
        tableId: conf.appwriteCollectionId,
        rowId: slug,
        data: {
          title: title,
          featuredImg: featuredImg,
          status: status,
          userId: userId,
          content: content,
        },
      });
    } catch (error) {
      console.log("Error while Creating post -> ", error);
    }
  }

  async updatePost(slug, { title, content, featuredImg, status, userId }) {
    try {
      return await this.tablesDB.updateRow({
        databaseId: conf.appwritDataBaseId,
        tableId: conf.appwriteCollectionId,
        rowId: slug,
        data: {
          title: title,
          featuredImg: featuredImg,
          status: status,
          userId: userId,
          content: content,
        },
      });
    } catch (error) {
      console.log("Error while Updating -> ", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.tablesDB.deleteRow({
        databaseId: conf.appwritDataBaseId,
        tableId: conf.appwriteCollectionId,
        rowId: slug,
      });
      return true;
    } catch (error) {
      console.log("Deletion Failed : ", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.tablesDB.getRow({
        databaseId: conf.appwritDataBaseId,
        tableId: conf.appwriteCollectionId,
        rowId: slug,
      });
    } catch (error) {
      console.log("get Post failed -> ", error);
    }
  }
  async getAllPost(queries = [Query.equal("status", true)]) {
    try {
      return await this.tablesDB.listRows({
        databaseId: conf.appwritDataBaseId,
        tableId: conf.appwriteCollectionId,
        queries: queries,
      });
    } catch (error) {
      console.log("Get all Post failed => ", error);
    }
  }

  //file Upload services

  async uploadFile(file) {
    try {
      return await this.storage.createFile({
        bucketId: conf.appwriteBucketId,
        fileId: ID.unique(),
        file: file,
      });
    } catch (error) {
      console.log("Upload file error ", error);
    }
  }

  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile({
        bucketId: conf.appwriteBucketId,
        fileId: fileId,
      });
      return true;
    } catch (error) {
      console.log("Deletion failed : ", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    try {
      return this.storage.getFileView({
        bucketId: conf.appwriteBucketId,
        fileId: fileId,
      });
    } catch (error) {
      console.log("Get file preview failed ,", error);
    }
  }
}

const services = new Services();

export default services;

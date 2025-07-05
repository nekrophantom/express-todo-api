import Post from "../models/post.model"
import { ApiError } from "../utils/apiError"

export const getAllPost = async () => {
    return await Post.findAll()
}

export const getPostById = async (id) => {
    const post = await Post.findByPk(id)

    if (!post) {
        throw new ApiError(400, `Post with ID ${id} not found`)
    }

    return post;
}

export const createPost = async (data) => {
    return await Post.create(data);
}

export const updatePost = async (id, data) => {
    const post = await Post.findByPk(id)

    if (!post) {
        throw new ApiError(400, `Post with ID ${id} not found`)
    }

    await post.update(data)

    return post
}

export const deletePost = async (id) => {
    const post = await Post.findByPk(id)

    if (!post) {
        throw new ApiError(400, `Post with ID ${id} not found`)
    }

    await post.destroy(id)

    return { message: "Post deleted successfully" };
}
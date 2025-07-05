import { catchAsync } from "../utils/catchAsync.js";
import * as PostService from '../services/post.service.js';
import { successResponse } from "../utils/apiResponse.js";

export const getAllPost = catchAsync(async (req, res) => {
    const posts = await PostService.getAllPost();
    return successResponse(res, "Posts retrieved successfully", posts)
})

export const getPostById = catchAsync(async (req, res) => {
    const { id } = req.params
    const post = await PostService.getPostById(id);
    return successResponse(res, "Post retrieved successfully", post)
})

export const createPost = catchAsync(async (req, res) => {
    const post = await PostService.createPost(req.body)
    return successResponse(res, "Post created successfully", post)
})

export const updatePost = catchAsync(async (req, res) => {
    const { id } = req.params
    const post = await PostService.updatePost(id, req.body)
    return successResponse(res, "Post updated successfully", post)
})

export const deletePost = catchAsync(async (req, res) => {
    const { id } = req.params
    const result = await PostService.deletePost(id)
    return successResponse(res, result.message)
})
import express from 'express'
import { createPost, deletePost, getAllPost, getPostById, updatePost } from '../controllers/post.controller'
import { validate } from '../middleware/validate'
import { createPostSchema, paramIdSchema, updatePostSchema } from '../validations/post.validation'

const router = express.Router()

router.get('/', getAllPost)
router.get('/:id', validate(paramIdSchema, "params"), getPostById)
router.post('/', validate(createPostSchema), createPost)
router.put('/:id', validate(paramIdSchema, "params"), validate(updatePostSchema), updatePost)
router.delete('/:id', validate(paramIdSchema, "params"), deletePost)

export default router
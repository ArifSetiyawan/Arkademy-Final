'use strict'

const Comment = use('App/Models/Comment');
class CommentController {      
  async store({ request, response }) {
    try {
      const comment = await Comment.create(request.all());

      return response.status(201).json({
        message: "Comment created successfully",
        data: comment
      });
    } catch (err) {
      return response.status(400).json({
        status: "error",
        message: "Could not create comment"
      });
    }
  }
  async delete({ params, response }) {
    const comment = await Comment.find(params.id);

    try {
      await comment.delete();

      return response.status(201).json({
        data: "Deleted successfully"
      });
    } catch (err) {
      return response.status(400).json({
        status: "error",
        message: "Could not delete comment"
      });
    }
  }
}

module.exports = CommentController

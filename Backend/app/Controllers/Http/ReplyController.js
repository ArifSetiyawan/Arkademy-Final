'use strict'
const Reply = use('App/Models/Reply');
class ReplyController {
    async store({ request, response }) {
        try {
          const reply = await Reply.create(request.all());
    
          return response.status(201).json({
            message: "reply created successfully",
            data: reply
          });
        } catch (err) {
          return response.status(400).json({
            status: "error",
            message: "Could not create reply"
          });
        }
      }
      async delete({ params, response }) {
        const reply = await Reply.find(params.id);
    
        try {
          await reply.delete();
    
          return response.status(201).json({
            data: "Deleted successfully"
          });
        } catch (err) {
          return response.status(400).json({
            status: "error",
            message: "Could not delete reply"
          });
        }
      }
}

module.exports = ReplyController

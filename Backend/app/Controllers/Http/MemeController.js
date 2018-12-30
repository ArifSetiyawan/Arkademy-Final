'use strict'
const Meme = use('App/Models/Meme');
class MemeController {
    async index({ response }) {
        try {
          const meme = await Meme.all();
    
          response.json(meme);
        } catch (err) {
          return response.status(400).json({
            status: "error",
            message: "Resource not found"
          });
        }
      }
    async show({ params, response }) {
        try {
          const meme = await Meme.query().where('id', params.id).with('comments').first() 

          response.json(meme);
        } catch (err) {
          return response.status(400).json({
            status: "error",
            message: "Memes not found"
          });
        }
      }
    
      async store({ request, response }) {
        try {
          const meme = await Meme.create(request.all());
    
          return response.status(201).json({
            message: "Meme created successfully",
            data: meme
          });
        } catch (err) {
          return response.status(400).json({
            status: "error",
            message: "Could not create meme"
          });
        }
      }
      async delete({ params, response }) {
        const meme = await Meme.find(params.id);
    
        try {
          await meme.delete();
    
          return response.status(201).json({
            data: "Deleted successfully"
          });
        } catch (err) {
          return response.status(400).json({
            status: "error",
            message: "Could not delete meme"
          });
        }
      }
}

module.exports = MemeController

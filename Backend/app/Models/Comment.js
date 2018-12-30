'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Comment extends Model {
    memes(){
        return this.belongsTo('App/Models/Meme')
    }
}

module.exports = Comment

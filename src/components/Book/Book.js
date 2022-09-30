export default class Book{
    id
    name
    description
    picture_url
    category
    publish
    owner
    target

    constructor(id, name, description, picture_url, category, publish, owner, target){
        this.id = id;
        this.name = name;
        this.description = description;
        this.picture_url = picture_url;
        this.category = category;
        this.publish = publish;
        this.owner = owner
        this.target = target
    }
}
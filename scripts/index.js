class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

class Repository {
  constructor() {
    this.activities = [];
    this.id = 0;
  }

  //un metodo que reciba datos de una actividad, cree una actividad nueva y la guarde en su array
  getAllActivities() {
    return this.activities;
  }

  // un metodo que le permita retornar todas las actividades
  createActivity(title, description, imgUrl) {
    const id = this.id++;
    //TODO CREAMOS UNA INSTANCIA
    const activity = new Activity(id, title, description, imgUrl);
    this.activities.push(activity);
  }

  // un metodo que le permita filtrar las activdades

  //eliminar activities
  deleteActivity(id) {
    this.activities = this.activities.filter((activity) => activity.id !== id);
  }
}

const RepositoryLeo = new Repository();
//Prueba de push
RepositoryLeo.createActivity("Leo", "ramos", "imgleo");
console.log(RepositoryLeo);
RepositoryLeo.createActivity("martin", "ramos", "imgleo");
console.log(RepositoryLeo);
RepositoryLeo.deleteActivity(0);
console.log(RepositoryLeo);

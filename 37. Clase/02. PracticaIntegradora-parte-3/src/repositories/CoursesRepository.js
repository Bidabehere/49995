export default class CoursesRepository{
    constructor(dao){
        this.dao = dao;
    }
    getAllCourses = async () =>{
        return await this.dao.getAll()
    }
    getCourseById = async (id) =>{
        return await this.dao.getById(id)
    }
    createCourse = async (course) => {
        return await this.dao.saveCourse(course);
    }
    update = async (id,course) =>{
        return await this.dao.updateCourse(id,course);
    }
}
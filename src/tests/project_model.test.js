import  projectModel  from '../model/projectModel'
import '../localStorage'
const model = projectModel();
describe('project function to store projects', () => {

  beforeEach(() => {
    localStorage.setItem('projects', JSON.stringify([{title: 'Project'}]));
  });

test("returns object containing project title", () => {
  expect(model.project('Project')).toEqual({title: 'Project'})
})
test("returns object containing project title", () => {
  expect(model.project('Project')).not.toBeNull();
})
test("returns object containing project title", () => {
  expect(model.project('Project')).not.toBeUndefined();
})
test("returns array of projects", () => {
  expect(model.all()).toEqual([{title: 'Project'}])
})
});

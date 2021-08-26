import  projectModel  from '../model/projectModel'
const model = projectModel();
describe('project function to store projects', () => {
test("returns object containing project title", () => {
  expect(model.project('Project')).toEqual({title: 'Project'})
})
test("returns object containing project title", () => {
  expect(model.project('Project')).not.toBeNull();
})
test("returns object containing project title", () => {
  expect(model.project('Project')).not.toBeUndefined();
})
});

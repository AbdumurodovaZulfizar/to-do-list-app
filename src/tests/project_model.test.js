import projectModel from '../model/projectModel';

import '../localStorage';

const model = projectModel();

describe('project function to store projects', () => {
  beforeEach(() => {
    localStorage.setItem('projects', JSON.stringify([{
      title: 'Project',
    }]));
  });

  afterAll(() => {
    localStorage.removeItem('projects');
  });

  test('returns object containing project title', () => {
    expect(model.project('Project')).toEqual({
      title: 'Project',
    });
  });
  test('returns object containing project title', () => {
    expect(model.project('Project')).not.toBeNull();
  });
  test('returns object containing project title', () => {
    expect(model.project('Project')).not.toBeUndefined();
  });
  test('returns array of projects', () => {
    expect(model.all()).toEqual([{
      title: 'Project',
    }]);
  });
  test('it is not equal to Null', () => {
    expect(model.all()).not.toBeNull();
  });
  test('it is not equal to Undefined', () => {
    expect(model.all()).not.toBeUndefined();
  });
  test('it will return the project according to its ID', () => {
    expect(model.get(0)).toEqual({
      title: 'Project',
    });
  });
  test('it is not equal to Null', () => {
    expect(model.get(0)).not.toBeNull();
  });
  test('it is not equal to Null', () => {
    expect(model.get(0)).not.toBeUndefined();
  });
});
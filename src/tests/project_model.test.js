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
  test('it will save the project', () => {
    model.save({ title: 'Saved Project'});
    expect(model.all().length).toEqual(2);
  })
  test('it will save the project on the next index', () => {
    model.save({ title: 'Saved Project'});
    expect(model.all().[1]).toEqual({ title: 'Saved Project' });
  })
  test('it will not be equal to Null', () => {
    model.save({ title: 'Saved Project'});
    expect(model.all().[1]).not.toBeNull();
  })
  test('it will not be equal to Undefined', () => {
    model.save({ title: 'Saved Project'});
    expect(model.all().[1]).not.toBeUndefined();
  })
  test('it will remove the selected project', () => {
    model.remove(0);
    expect(model.all().length).toEqual(0);
  })
  test('it will not equal to null', () => {
    model.remove(0);
    expect(model.all().length).not.toBeNull();
  })
  test('it will not equal to Undefined', () => {
    model.remove(0);
    expect(model.all().length).not.toBeUndefined();
  })
});
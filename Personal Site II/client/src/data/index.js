import experiences from './experience';
import goals from './goals';
import about from './about';

experiences.reduce((id, ex) => {
    ex.id = id;
    return id + 1;
}, 0);

export { experiences, goals, about };

import Home from '../view/pages/home';
import Detail from '../view/pages/detail';
import Like from '../view/pages/like';

const routes = {
	'/': Home, // default page
	'/home': Home,
	'/detail/:id': Detail,
	'/like': Like,
};

export default routes;

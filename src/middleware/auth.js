export default function auth({ next, router }) {

    if (!localStorage.getItem('token')) {

      return router.push({ path: 'login' });

    }
  
    return next();
  }
import axios from 'axios';
const baseUrl = 'http://event.ceeren.com';

const categoryData = async (setX: any) => {
  await axios({
    method: 'get',
    url: `${baseUrl}/api/event_category/`,
    timeout: 5000,
  })
    .then(response => {
      setX(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};

const lastEventsData = async (setX: any, setLoad: any) => {
  await axios({
    method: 'get',
    url: `${baseUrl}/api/events/`,
    timeout: 5000,
  })
    .then(response => {
      setX(response.data);
      setLoad(true);
    })
    .catch(error => {
      console.log(error, 'eventsList');
    });
};

const popularEventsData = async (setX: any) => {
  await axios({
    method: 'get',
    url: `${baseUrl}/api/events/`,
    timeout: 5000,
  })
    .then(response => {
      setX(response.data);
    })
    .catch(error => {
      console.log(error, 'popular');
    });
};

const searchEventsData = async (
  setX: any,
  searchParam: any,
  startDate: any,
  endDate: any,
  selectedCategory: any,
) => {
  if (startDate === '1970-01-01') {
    startDate = '';
  }
  if (endDate === '1970-01-01') {
    endDate = '';
  }
  await axios({
    method: 'get',
    url: `${baseUrl}/api/events/?search=${searchParam}&eventDate__gte=${startDate}&eventDate__lte=${endDate}&category__in=${selectedCategory}`,
    timeout: 5000,
  })
    .then(response => {
      setX(response.data);
    })
    .catch(error => {
      console.log(error, 'search');
    });
};

const pastEventsData = async (setX: any) => {
  let endDate = new Date().toISOString().split('T')[0];
  console.log(endDate);
  await axios({
    method: 'get',
    url: `${baseUrl}/api/events/?eventDate__lt=${endDate}`,
    timeout: 5000,
  })
    .then(response => {
      setX(response.data);
    })
    .catch(error => {
      console.log(error, 'pastEvents');
    });
};

const detailEventData = async (setX: any, setLoad: any, eventId: any) => {
  await axios({
    method: 'get',
    url: `${baseUrl}/api/events/${eventId}`,
    timeout: 5000,
  })
    .then(response => {
      setX(response.data[0]);
      setLoad(true);
    })
    .catch(error => {
      console.log(error, 'eventsList');
    });
};

export {
  lastEventsData,
  popularEventsData,
  searchEventsData,
  categoryData,
  pastEventsData,
  detailEventData,
};

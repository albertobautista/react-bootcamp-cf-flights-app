import moment from 'moment';

export const getDate = (oldDate) => {
  return moment(oldDate).format('DD/MM/YYYY');
};

export const getTime = (oldDate) => {
  return moment(oldDate).format('HH:mm');
};

export const getDuration = (duration) => {
  const days = moment.duration(duration).get('days');
  const hours = moment.duration(duration).get('hours');
  const minutes = moment.duration(duration).get('minutes');

  return `${days > 0 ? days + ' d' : ''} ${hours > 0 ? hours + 'h' : ''}  ${
    minutes > 0 ? minutes + 'm' : ''
  }`;
};

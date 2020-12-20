import fetch from 'cross-fetch';
import config from '../config';

const request = async (url, options) => {
  try {
    const URL = `http://${config.host}:${config.port}/api/${url}`;
    const response = await fetch(url, options);
    const status = response.status;
    const contentType = response.headers
      .get('content-type')
      .replace(/;.*$/, '').trim()
    const body = await response.text();
    let content;
    switch (contentType.toLowerCase()) {
      case 'application/json':
      case 'application/x-javascript':
      case 'text/javascript':
      case 'text/x-javascript':
      case 'text/x-json':
      default:
        try {
          content = JSON.parse(body);
        } catch (err) {
          content = {
            err: body
          };
        }
        break;
      case 'text/html':
      case 'text/plain':
        content = body;
        break;
    }
    content.status = status;
    return content;
  } catch (err) {
    console.error(err);
  }
}

const get = async (url) => {
  const token = localStorage.getItem('');
  return request(url, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    }
  })
}

const post = async (url, body = {}) => {
  const token = localStorage.getItem('');
  return request(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify(body)
  })
}

const put = async (url, body = {}) => {
  const token = localStorage.getItem('');
  return request(url, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify(body)
  })
}

const del = async (url, body = {}) => {
  const token = localStorage.getItem('');
  return request(url, {
    method: 'del',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify(body)
  })
}

export {
  get,
  post,
  put,
  del,
}
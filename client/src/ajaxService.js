const root = (typeof window === 'object') ? window : global;
if (!root.Promise) {
  root.Promise = Promise;
}

function checkStatus(response) {
  return response.json()
    .then((data) => {
      return {
        status: response.status,
        data: data,
        isSuccess: response.status >= 200 && response.status < 300
      };
    });
}

function getPortfolio() {
  return fetch('portfolio/1/', {
    headers: {
      'Accept': 'application/json, text/plain, */*'
    },
    method: 'GET',
    credentials: 'same-origin'
  }).then(checkStatus);
}

function getCompany(company_id) {
  return fetch(`company/${company_id}/`, {
    headers: {
      'Accept': 'application/json, text/plain, */*'
    },
    method: 'GET',
    credentials: 'same-origin'
  }).then(checkStatus);
}

function getRegistry(company_id) {
  return fetch(`registry/${company_id}/`, {
    headers: {
      'Accept': 'application/json, text/plain, */*'
    },
    method: 'GET',
    credentials: 'same-origin'
  }).then(checkStatus);
}

export {getPortfolio, getCompany, getRegistry};
import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Llamar una API y retornar datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: 'camiseta' }));

    getData('https://us-central1-gndx-fake-api.cloudfunctions.net/api').then(
      response => {
        expect(response.data).toEqual('camiseta');
      }
    );
    // para garantizar que el llamado a la API
    // si esta siendo ejecutada
    expect(fetch.mock.calls[0][0]).toEqual(
      'https://us-central1-gndx-fake-api.cloudfunctions.net/api'
    );
  });
});

/* getData('https://google.com') */

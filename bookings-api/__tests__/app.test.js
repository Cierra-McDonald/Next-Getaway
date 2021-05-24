const app = require('../lib/app');
const pool = require('../lib/utils/connect');
const setup = require('../setup-db');
const request = require('supertest');
// jest.useFakeTimers()


describe('Places API routes', () => { 

  it('should render one getaway by id', async () => { 
    const response = await request(app)
      .get('/api/v1/places/6092e1d88cb048f1d3300bd9')

      expect(response.body).toEqual({
        id: '6092e1d88cb048f1d3300bd9',
        name: 'Fantastic Park',
        slug: 'fantastic-park',
        description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
        location: '68535 Tyrel Inlet, Davismouth, Georgia, 29036',
        price_per_night: 229,
        image: 'http://placeimg.com/1080/800',
        image_thumbnail: 'http://placeimg.com/400/400',
        max_guests: 21,
        pet_friendly: true,
        pool: true,
        wifi: false,
        createdAt: '2021-05-05T18:20:08.703Z',
        updatedAt: '2021-05-05T18:20:08.703Z',
        __v: 0
      });
      
  })
})

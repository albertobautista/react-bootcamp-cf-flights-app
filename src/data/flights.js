export const flights = {
  meta: {
    count: 1,
    links: {
      self: 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MEX&destinationLocationCode=BKK&departureDate=2022-08-22&adults=1&max=1'
    }
  },
  data: [
    {
      type: 'flight-offer',
      id: '1',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-08-22',
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: 'PT29H16M',
          segments: [
            {
              departure: {
                iataCode: 'MEX',
                terminal: '1',
                at: '2022-08-22T16:44:00'
              },
              arrival: {
                iataCode: 'LAX',
                terminal: 'B',
                at: '2022-08-22T18:45:00'
              },
              carrierCode: 'CX',
              number: '7785',
              aircraft: {
                code: '738'
              },
              operating: {
                carrierCode: 'AA'
              },
              duration: 'PT4H1M',
              id: '1',
              numberOfStops: 0,
              blacklistedInEU: false
            },
            {
              departure: {
                iataCode: 'LAX',
                terminal: 'B',
                at: '2022-08-23T01:15:00'
              },
              arrival: {
                iataCode: 'HKG',
                terminal: '1',
                at: '2022-08-24T06:45:00'
              },
              carrierCode: 'CX',
              number: '881',
              aircraft: {
                code: '77W'
              },
              operating: {
                carrierCode: 'CX'
              },
              duration: 'PT14H30M',
              id: '2',
              numberOfStops: 0,
              blacklistedInEU: false
            },
            {
              departure: {
                iataCode: 'HKG',
                terminal: '1',
                at: '2022-08-24T08:00:00'
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-08-24T10:00:00'
              },
              carrierCode: 'CX',
              number: '705',
              aircraft: {
                code: '333'
              },
              operating: {
                carrierCode: 'CX'
              },
              duration: 'PT3H',
              id: '3',
              numberOfStops: 0,
              blacklistedInEU: false
            }
          ]
        }
      ],
      price: {
        currency: 'EUR',
        total: '911.79',
        base: '498.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER'
          },
          {
            amount: '0.00',
            type: 'TICKETING'
          }
        ],
        grandTotal: '911.79'
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true
      },
      validatingAirlineCodes: ['CX'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '911.79',
            base: '498.00'
          },
          fareDetailsBySegment: [
            {
              segmentId: '1',
              cabin: 'ECONOMY',
              fareBasis: 'VR21SRIO',
              class: 'V',
              includedCheckedBags: {
                quantity: 1
              }
            },
            {
              segmentId: '2',
              cabin: 'ECONOMY',
              fareBasis: 'VR21SRIO',
              class: 'V',
              includedCheckedBags: {
                quantity: 1
              }
            },
            {
              segmentId: '3',
              cabin: 'ECONOMY',
              fareBasis: 'VR21SRIO',
              brandedFare: 'ECONLIGHT',
              class: 'V',
              includedCheckedBags: {
                quantity: 1
              }
            }
          ]
        }
      ]
    }
  ],
  dictionaries: {
    locations: {
      MEX: {
        cityCode: 'MEX',
        countryCode: 'MX'
      },
      LAX: {
        cityCode: 'LAX',
        countryCode: 'US'
      },
      BKK: {
        cityCode: 'BKK',
        countryCode: 'TH'
      },
      HKG: {
        cityCode: 'HKG',
        countryCode: 'HK'
      }
    },
    aircraft: {
      333: 'AIRBUS A330-300',
      '77W': 'BOEING 777-300ER',
      738: 'BOEING 737-800'
    },
    currencies: {
      EUR: 'EURO'
    },
    carriers: {
      AA: 'AMERICAN AIRLINES',
      CX: 'CATHAY PACIFIC'
    }
  }
};

export const flightsData = [
  {
    type: 'flight-offer',
    id: '1',
    source: 'GDS',
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    lastTicketingDate: '2022-08-22',
    numberOfBookableSeats: 4,
    itineraries: [
      {
        duration: 'PT29H16M',
        segments: [
          {
            departure: {
              iataCode: 'MEX',
              terminal: '1',
              at: '2022-08-22T16:44:00'
            },
            arrival: {
              iataCode: 'LAX',
              terminal: 'B',
              at: '2022-08-22T18:45:00'
            },
            carrierCode: 'CX',
            number: '7785',
            aircraft: {
              code: '738'
            },
            operating: {
              carrierCode: 'AA'
            },
            duration: 'PT4H1M',
            id: '1',
            numberOfStops: 0,
            blacklistedInEU: false
          },
          {
            departure: {
              iataCode: 'LAX',
              terminal: 'B',
              at: '2022-08-23T01:15:00'
            },
            arrival: {
              iataCode: 'HKG',
              terminal: '1',
              at: '2022-08-24T06:45:00'
            },
            carrierCode: 'CX',
            number: '881',
            aircraft: {
              code: '77W'
            },
            operating: {
              carrierCode: 'CX'
            },
            duration: 'PT14H30M',
            id: '2',
            numberOfStops: 0,
            blacklistedInEU: false
          },
          {
            departure: {
              iataCode: 'HKG',
              terminal: '1',
              at: '2022-08-24T08:00:00'
            },
            arrival: {
              iataCode: 'BKK',
              at: '2022-08-24T10:00:00'
            },
            carrierCode: 'CX',
            number: '705',
            aircraft: {
              code: '333'
            },
            operating: {
              carrierCode: 'CX'
            },
            duration: 'PT3H',
            id: '3',
            numberOfStops: 0,
            blacklistedInEU: false
          }
        ]
      }
    ],
    price: {
      currency: 'EUR',
      total: '911.79',
      base: '498.00',
      fees: [
        {
          amount: '0.00',
          type: 'SUPPLIER'
        },
        {
          amount: '0.00',
          type: 'TICKETING'
        }
      ],
      grandTotal: '911.79'
    },
    pricingOptions: {
      fareType: ['PUBLISHED'],
      includedCheckedBagsOnly: true
    },
    validatingAirlineCodes: ['CX'],
    travelerPricings: [
      {
        travelerId: '1',
        fareOption: 'STANDARD',
        travelerType: 'ADULT',
        price: {
          currency: 'EUR',
          total: '911.79',
          base: '498.00'
        },
        fareDetailsBySegment: [
          {
            segmentId: '1',
            cabin: 'ECONOMY',
            fareBasis: 'VR21SRIO',
            class: 'V',
            includedCheckedBags: {
              quantity: 1
            }
          },
          {
            segmentId: '2',
            cabin: 'ECONOMY',
            fareBasis: 'VR21SRIO',
            class: 'V',
            includedCheckedBags: {
              quantity: 1
            }
          },
          {
            segmentId: '3',
            cabin: 'ECONOMY',
            fareBasis: 'VR21SRIO',
            brandedFare: 'ECONLIGHT',
            class: 'V',
            includedCheckedBags: {
              quantity: 1
            }
          }
        ]
      }
    ]
  },
  {
    type: 'flight-offer',
    id: '2',
    source: 'GDS',
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    lastTicketingDate: '2022-07-23',
    numberOfBookableSeats: 3,
    itineraries: [
      {
        duration: 'PT4H12M',
        segments: [
          {
            departure: {
              iataCode: 'MEX',
              terminal: '2',
              at: '2022-08-22T17:00:00'
            },
            arrival: {
              iataCode: 'LAX',
              terminal: '2',
              at: '2022-08-22T19:12:00'
            },
            carrierCode: 'DL',
            number: '630',
            aircraft: {
              code: '757'
            },
            operating: {
              carrierCode: 'DL'
            },
            duration: 'PT4H12M',
            id: '1',
            numberOfStops: 0,
            blacklistedInEU: false
          }
        ]
      }
    ],
    price: {
      currency: 'EUR',
      total: '156.27',
      base: '52.00',
      fees: [
        {
          amount: '0.00',
          type: 'SUPPLIER'
        },
        {
          amount: '0.00',
          type: 'TICKETING'
        }
      ],
      grandTotal: '156.27'
    },
    pricingOptions: {
      fareType: ['PUBLISHED'],
      includedCheckedBagsOnly: false
    },
    validatingAirlineCodes: ['DL'],
    travelerPricings: [
      {
        travelerId: '1',
        fareOption: 'STANDARD',
        travelerType: 'ADULT',
        price: {
          currency: 'EUR',
          total: '156.27',
          base: '52.00'
        },
        fareDetailsBySegment: [
          {
            segmentId: '1',
            cabin: 'ECONOMY',
            fareBasis: 'VNNC0SBM',
            brandedFare: 'BASICECON',
            class: 'E',
            includedCheckedBags: {
              quantity: 0
            }
          }
        ]
      }
    ]
  }
];

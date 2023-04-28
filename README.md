# Image Generator API

A simple API for generating text-based images and avatars.

## Inspiration

This project was inspired by the [ui-avatars.com API](https://ui-avatars.com/), which also generates avatars with custom text and background colors.

## Requirements

- Node.js (v10 or higher)
- npm

## Installation

1. Clone the repository: `git clone https://github.com/example/image-generator-api.git`
2. Change into the project directory: `cd image-generator-api`
3. Install dependencies: `npm install`
4. Start the server: `npm start`

## Usage

The API has two endpoints:

### Generate Image

`GET /api/image`

Generates a text-based image with the specified parameters.

#### Query Parameters

| Name        | Type   | Default    | Description                                           |
| ----------- | ------ | ---------- | ----------------------------------------------------- |
| `text`      | string | `"Hello World!"` | The text to display on the image |
| `color`     | string | `"white"`       | The color of the text |
| `background` | string | `"orange"`      | The background color of the image |
| `width`     | number | `1980`          | The width of the image |
| `height`    | number | `1080`          | The height of the image |

#### Example Request

`GET /api/image?text=Hello&color=red&background=black&width=800&height=600`

#### Example Response

Returns a PNG image.

### Generate Avatar

`GET /api/avatar`

Generates a text-based avatar with the specified parameters.

#### Query Parameters

| Name        | Type   | Default    | Description                                           |
| ----------- | ------ | ---------- | ----------------------------------------------------- |
| `name`      | string | `"VJ"`          | The name to use for the avatar. Initials will be used if not provided |
| `color`     | string | `"white"`       | The color of the text |
| `background` | string | `"orange"`      | The background color of the image |


#### Example Request

`GET /api/avatar?name=John%20Doe&color=blue&background=gray`

#### Example Response

Returns a PNG image.

## License

This project is licensed under the MIT License - see the LICENSE file for details.


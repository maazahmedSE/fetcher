# jsonHit - A Comprehensive HTTP Methods Library

jsonhit is a comprehensive HTTP methods library built using the Fetch API. It simplifies making HTTP requests and handling responses in Node.js and browser environments. With jsonhit, you can easily perform GET, POST, and other HTTP operations with minimal configuration.

## Key Features

- Simplified HTTP request methods (GET, POST)
- Supports custom headers and request bodies
- Built-in error handling
- Compatible with Node.js and browser environments
- Lightweight and easy to use

## Installation

To install jsonhit, run:

```bash
npm install json-hit
```

## Usage

Importing jsonHit
In a JavaScript module, you can import jsonHit like this:

```javascript
import jsonHit from 'json-hit';
```

## Making a GET Request

Example of making a GET request:

```javascript
import jsonHit from 'json-hit';

const url = 'https://jsonplaceholder.typicode.com/posts';
jsonHit.get(url)
.then(response => console.log(response))
.catch(error => console.error('Error:', error));
```

## Making a POST Request

Example of making a POST request:

```javascript
import jsonHit from 'json-hit';

const url = 'https://jsonplaceholder.typicode.com/posts/1';

const data = {
id: 1,
title: 'foo',
body: 'bar',
userId: 1
};

jsonHit.put(url, {
'Content-Type': 'application/json'
}, data)
.then(response => console.log(response))
.catch(error => console.error('Error:', error));
```

## NOTE:

we are working on it and will implement more feature on it.

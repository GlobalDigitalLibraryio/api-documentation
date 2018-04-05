import httpStaus from 'http-status';
import config from '../config';

export const htmlTemplate = body =>
  `<!doctype html>\n<html lang='nb' >
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <link href='/swagger/css/api-documentation.css' media='screen' rel='stylesheet' type='text/css'/>
    </head>
    <body>
      <div id='gdl_header'>
        <a href="/" class='home'>APIs from GDL</a>
      </div>
      <div id='blue_bar'>
         <div id='beta'>*** BETA ***</div>
      </div>
      <div id='content'>
        <ul>${body}</ul>
      </div>
    </body>
  </html>`;

export const apiDocsUri = (apiObj) => {
  for (const uri of apiObj.paths) {
    if (config.apiDocPath.test(uri)) {
      return uri;
    }
  }
  return undefined;
};

 export const apiListTemplate = (items) => {
   const listItems = items.map(obj =>
     `<li><a href="/swagger?url=${apiDocsUri(obj)}">${obj.service.name}</a></li>`
  );

  return htmlTemplate(listItems.join(''));
};

export const htmlErrorTemplate = ({ status, message, description, stacktrace }) => {
  const statusMsg = httpStaus[status];
  return htmlTemplate('nb', `
    <h1>${status} ${statusMsg}</h1>
    <div><b>Message: </b>${message}</div>
    <div><b>Description: </b>${description}</div>
    <div>${stacktrace}</div>
  `);
};

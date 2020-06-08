import React from 'react'

const FormFactory = () => {

  // const [data, setData] = useState([
  //   { name: 'name', element: 'input', type: 'text' },
  //   { name: 'password', element: 'input', type: 'password' },
  //   { name: 'email', element: 'input', type: 'email' },
  //   { name: 'descrição', element: 'input', type: 'textarea' },
  //   {
  //     name: 'Selecione uma opção',
  //     element: 'input',
  //     type: 'select',
  //     source: [
  //       { name: 'option1', id: 1 },
  //       { name: 'option2', id: 2 },
  //       { name: 'option3', id: 3 },
  //     ],
  //   },
  //   { name: 'name', element: 'input', type: 'number', max: 100 },
  // ]);

  let Data = [
    { name: 'name', type: 'text' },
    { name: 'number', type: 'number' },
  ];

  let Elements = {
    'text': (name) => `<input type="text" name="${name}">`,
    'number': (name) => `<input type="number" name="${name}">`,
  }

  const Factory = ({ type, name }) => Elements[type](name);

  const htmlElements = () => {
    return Data.map(item => Factory(item)).join('<br /><br />')
  }

  return (
    <>
      <h1>FormFactory</h1>
      <form dangerouslySetInnerHTML={{ __html: htmlElements() }}>
      </form>

    </>
  )
}

export default FormFactory;
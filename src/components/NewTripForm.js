import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from './Layout'

const FormWrapper = styled.section`
  display: grid;
  gap: 1rem;
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 12px;
  background: #fafafa;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
`

const Label = styled.label`
  font-weight: bold;
`

const Button = styled.button`
  padding: 0.75rem;
  background: #0077cc;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #005fa3;
  }

`


export default function NewTripForm() {

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    location: '',
    startDate: '',
    endDate: '',
    tags: '',
    rating: '',
    highlights: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({...prev, [name]: value}));
  };

  const handleSubmit = e => {
    e.preventDefault();

  const tagsArray = formData.tags
    .split(',')
    .map(tag => `"${tag.trim()}"`)
    .join(', ');

  const mdxContent = `---
    title: "${formData.title}"
    slug: "${formData.slug}"
    location: "${formData.location}"
    startDate: "${formData.startDate}"
    endDate: "${formData.endDate}"
    tags: [${tagsArray}]
    coverImage: "./${formData.coverImageName || 'imagem.jpg'}"
    rating: ${formData.rating}
    ---

    ## Highlights

    ${formData.highlights
      .split('\n')
      .map(line => `- ${line}`)
      .join('\n')}

    ## Journal

    Dia 1: ...  
    Dia 2: ...
    `;

  console.log('Conteúdo gerado para .mdx:\n\n', mdxContent);

  };

  const [coverImage, setCoverImage] = useState(null);

  const handleFileChange = e => {
    setCoverImage(e.target.files[0]);
  };

  


  
  return (
    <Layout>
      <FormWrapper>
        <Label>Título</Label>
        <Input name="title" value={formData.title} onChange={handleChange} required />

        <Label>Slug</Label>
        <Input name="slug" value={formData.slug} onChange={handleChange} required />

        <Label>Local</Label>
        <Input name="location" value={formData.location} onChange={handleChange} required />

        <Label>Data de Início</Label>
        <Input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />

        <Label>Data de Fim</Label>
        <Input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />

        <Label>Tags (separadas por vírgula)</Label>
        <Input name="tags" value={formData.tags} onChange={handleChange} />

        <Label>Nota (0 a 5)</Label>
        <Input type="number" step="0.1" min="0" max="5" name="rating" value={formData.rating} onChange={handleChange} />

        <Label>Destaques</Label>
        <TextArea name="highlights" rows="4" value={formData.highlights} onChange={handleChange} />

        <input type="file" name="coverImage" accept="image/*" onChange={handleFileChange} />


        <Button type="submit" onClick={handleSubmit}>Criar Viagem</Button>

      </FormWrapper>
    </Layout>
  )
}

export const catSchema = {
  name: 'cat',
  title: 'Gato para Adoção',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'photo',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Descrição',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required().max(300),
    },
    {
      name: 'age',
      title: 'Idade',
      type: 'string',
      description: 'Ex: "2 anos", "6 meses"',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'gender',
      title: 'Sexo',
      type: 'string',
      options: {
        list: [
          { title: 'Macho', value: 'Macho' },
          { title: 'Fêmea', value: 'Fêmea' },
        ],
        layout: 'radio',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'castrated',
      title: 'Castrado',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'available',
      title: 'Disponível para Adoção',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'featured',
      title: 'Destaque na Home',
      type: 'boolean',
      initialValue: false,
      description: 'Marque para mostrar este gatinho na página inicial',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'age',
      media: 'photo',
    },
  },
}

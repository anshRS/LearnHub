import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    subtitle: Yup.string().required('Subtitle is required'),
    descriptions: Yup.array().of(
        Yup.object().shape({
            heading: Yup.string().required('Heading is required'),
            content: Yup.string().required('Content is required'),
        })
    ),
    image: Yup.mixed().required('Image is required')
});

const CreateBlogForm = () => {
    const { control, register, handleSubmit, setError, formState, getValues, setValue } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            title: '',
            subtitle: '',
            descriptions: [{ heading: '', content: '' }],
            image: null,
        },
    });

    const onSubmit = (data) => {        
        data.image = data.image[0]  
        console.log(data)      
    };

    const addDescription = () => {
        const currentDescriptions = getValues('descriptions');
        const newDescription = { heading: '', content: '' };
        currentDescriptions.push(newDescription);
        setError('descriptions', { shouldFocus: true });
    };

    const removeDescription = (index) => {
        const currentDescriptions = getValues('descriptions');
        currentDescriptions.splice(index, 1);
        setError('descriptions', { shouldFocus: true });
    };

    return (
        <div className="w-full p-4 mt-32 px-60 mb-32 font-raleway">
            <h1 className="text-5xl  text-center mb-4">Create Blog</h1>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="title" className="block text-2xl">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        {...register('title')}
                        className="w-full border border-gray-300 rounded-md py-2 px-3"
                        placeholder="Enter title"
                    />
                    <p className='text-red-600'>{formState.errors.title?.message}</p>
                </div>
                <div>
                    <label htmlFor="subtitle" className="block text-2xl">
                        Subtitle
                    </label>
                    <input
                        type="text"
                        id="subtitle"
                        {...register('subtitle')}
                        className="w-full border border-gray-300 rounded-md py-2 px-3"
                        placeholder="Enter subtitle"
                    />
                    <p className='text-red-600'>{formState.errors.subtitle?.message}</p>
                </div>
                <div>
                    <p className="block mb-2 text-2xl">Descriptions</p>
                    <div className="space-y-4">
                        {getValues('descriptions').map((_, index) => (
                            <div key={index}>
                                <label htmlFor={`descriptions[${index}].heading`} className="block font-medium">
                                    Heading
                                </label>
                                <input
                                    type="text"
                                    id={`descriptions[${index}].heading`}
                                    {...register(`descriptions[${index}].heading`)}
                                    className="w-full border border-gray-300 rounded-md py-2 px-3"
                                    placeholder="Enter heading"
                                />
                                <p className="text-red-600">
                                    {formState.errors.descriptions && formState.errors.descriptions[index]?.heading?.message}
                                </p>
                                <label htmlFor={`descriptions[${index}].content`} className="block font-medium">
                                    Content
                                </label>
                                <textarea
                                    id={`descriptions[${index}].content`}
                                    {...register(`descriptions[${index}].content`)}
                                    className="w-full border border-gray-300 rounded-md py-2 px-3"
                                    rows="4"
                                    placeholder="Enter content"
                                />
                                <p className="text-red-600">
                                    {formState.errors.descriptions && formState.errors.descriptions[index]?.content?.message}
                                </p>

                                <div className='flex flex-row-reverse w-full'>
                                    <button
                                        type="button"
                                        onClick={() => removeDescription(index)}
                                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4  mb-5 rounded-lg focus:outline-none"
                                    >
                                        Remove Description
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <label htmlFor="image" className='block text-2xl py-2'>Upload Image</label>
                    <input type="file" {...register('image')} />
                    <p className='text-red-600'>{formState.errors.image?.message}</p>
                </div>
                <button
                    type="button"
                    onClick={addDescription}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mr-5 rounded-lg focus:outline-none"
                >
                    Add Description
                </button>
                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
                >
                    Create Blog
                </button>
            </form>
        </div>
    );
};

export default CreateBlogForm;

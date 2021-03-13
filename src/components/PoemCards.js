import React from 'react'

export default function PoemCards(props) {
    return (
        <div className="max-w-2xl mx-auto sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-md">
                <div className="px-6 py-4 bg-white border-b border-gray-200 font-bold uppercase">
                    {props.title}
                </div>
                <div className="p-6 bg-white border-b border-gray-200 leading-10">
                    {props.text.split('\n').map(function (item, key) {
                        return (
                            <span key={key}>
                                {item}
                                <br />
                            </span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

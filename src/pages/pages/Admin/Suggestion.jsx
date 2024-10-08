import React from "react";
import { FaEllipsisH } from "react-icons/fa";

const Result = () => {
    const reports = [
        { id: 1, name: "Sugguet", country: "France", points: "point" },
        { id: 2, name: "Sugguet", country: "Netherlands", points: "point" },
        { id: 3, name: "Sugguet", country: "Sugguet", points: "point" },
        { id: 4, name: "Sugguet", country: "Sugguet", points: "point" },
    ];

    const highlights = Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        title: `Highlights`,
        description: `Highlights`,
    }));

    return (
        <div className="overflow-y-auto">
            <div className=" mx-auto">
                <div className="grid grid-cols-2 gap-8">
                    <section className={'col-span-1 '}>
                        <div className="text-center border p-6 rounded-xl">
                            <h1 className="text-4xl font-bold text-gray-900">Suggusetting</h1>
                        </div>
                        <div className=" mt-8">
                            <div className="bg-white rounded-xl border p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-bold">Reports</h2>
                                    <FaEllipsisH className="text-gray-400"/>
                                </div>
                                <div className="space-y-4">
                                    {reports.map((report) => (
                                        <div
                                            key={report.id}
                                            className="bg-gray-50 p-4 rounded-lg shadow flex justify-between items-center"
                                        >
                                            <div>
                                                <div className="text-lg font-bold">
                                                    {report.id}.{report.name}
                                                </div>
                                                <div className="text-sm text-gray-500">{report.country}</div>
                                            </div>
                                            <div className="text-lg font-bold">{report.points}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                    <div>
                        <div className="bg-white rounded-xl border p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold">Highlights</h2>
                                <FaEllipsisH className="text-gray-400"/>
                            </div>
                            <div className="space-y-8">
                                {highlights.map((highlight) => (
                                    <div key={highlight.id} className="flex justify-between items-center">
                                        <div>
                                            <div className="text-lg font-bold">{highlight.id} {highlight.title}</div>
                                            <div className="text-sm text-gray-500">{highlight.description}</div>
                                        </div>
                                        <button className="bg-white border py-2 px-6 font-bold rounded-full">focal point</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Result;

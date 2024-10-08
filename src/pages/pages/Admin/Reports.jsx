import React, { useEffect, useState } from 'react';
import UploadSection from '../../components/UploadSection';
import HistorySection from '../../components/HistorySection';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import ClipLoader from 'react-spinners/ClipLoader';  // 导入 ClipLoader

const UploadPage = () => {
    const [historyItems, setHistoryItems] = useState([]);
    const [loading, setLoading] = useState(true);  // 新增 loading 状态

    // 从 Firestore 获取历史上传记录
    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'uploads'));
                const items = querySnapshot.docs.map((doc) => doc.data());
                setHistoryItems(items);
            } catch (error) {
                console.error('Error fetching history:', error);
            } finally {
                setLoading(false);  // 数据加载完成，关闭 loading 状态
            }
        };

        fetchHistory();
    }, []);

    // 当文件上传成功时，添加到历史记录
    const handleUploadSuccess = (item) => {
        setHistoryItems((prevHistoryItems) => [item, ...prevHistoryItems]);
    };

    return (
        <div className={'px-4'}>
            <div>
                <h2 className="text-3xl font-bold border p-6 rounded-2xl">Upload</h2>
            </div>

            {/* 如果正在加载，则显示 ClipLoader 加载动画 */}
            {loading ? (
                <div className="flex justify-center items-center h-96">
                    <ClipLoader color="#3498db" loading={loading} size={50} />
                </div>
            ) : (
                <div className="grid grid-cols-5 gap-8 mt-5">
                    <div className="col-span-3">
                        <UploadSection onUploadSuccess={handleUploadSuccess} />
                    </div>
                    <div className="col-span-2">
                        <HistorySection historyItems={historyItems} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default UploadPage;

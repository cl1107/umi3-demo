import { ProFormText } from '@ant-design/pro-form';
import { ConfigProvider, Input } from 'antd';
import { useEffect } from 'react';

export default function IndexPage() {
  useEffect(() => {
    ConfigProvider.config({
      theme: {
        primaryColor: 'red',
      },
    });
  });
  return (
    <div>
      <ProFormText />
      <Input />
      <a>测试链接</a>
    </div>
  );
}

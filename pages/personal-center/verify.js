import { useState, useRef } from 'react';
import Link from "next/link";
import Layout from "@/components/PersonalCenterLayout";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import LoadingButton from '@mui/lab/LoadingButton';
import Chip from '@mui/material/Chip';
import { useThrottleFn } from 'ahooks';
import { getPolicy, saveCardPic } from '@/services';

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [photoUrl, setPhotoUrl] = useState('');
  const inputRef = useRef(null);
  
  const {
    run: handleSubmit,
  } = useThrottleFn(() => {
    setLoading(true);
    saveCardPic({ photoUrl }).then(res => {
      console.log(res)
      setLoading(false);
    });
  });

  const initData = async () => {
  }

  const onChange = (e) => {
    console.log(e.target.files[0]);
    getPolicy().then(({data}) => {
      console.log(data)
      // setPhotoUrl(res);
      uploadImg(data, e.target.files[0]);
    });
  }

  const uploadImg = (params, file) => {
    const formdata = new FormData();
    formdata.append('OSSAccessKeyId', params.accessid);
    formdata.append('key', params.dir + '/' + file.name);
    formdata.append('success_action_status', '200');
    formdata.append('policy', params.policy);
    formdata.append('signature', params.signature);
    formdata.append('file', file);

    fetch(params.host, {
      method: 'POST',
      body: formdata
    }).then(res => res.json())
    .then(res => {
      console.log(res)
    }).catch(e => {
      console.log(e)
    })
  }

  return (
    <Layout>
  
      <div className="container p-4">
        <div className="p-2 mb-8 sm:mb-20">
          <Link href="/personal-center" className="inline-flex items-center text-sm">
            <img className="w-4 h-4 rotate-180 mr-1" src="/assets/images/arrow.png" />
            <span>返回</span>
          </Link>
        </div>
        <Card className="mt-4 mx-auto max-w-sm" variant="outlined">
          <CardContent>
            <Box className="p-4">
              <h4 className='text-black font-semibold'>身份信息 <Chip size='small' label="success" color="success" variant="outlined" /></h4>
              <p className='mt-2 mb-4 text-sm text-gray-500'>你需要提供一张手持身份证的照片</p>

              <IconButton className='w-full h-36 rounded-xl border border-gray-400 bg-gray-100' aria-label="upload picture" component="label">
                <input ref={inputRef} hidden accept="image/*" type="file" onChange={onChange} />
                <PhotoCamera fontSize='large' />
              </IconButton>

              <LoadingButton
                className={`mt-12 ${ !loading ? 'bg-blue-900' : ''}`}
                loading={loading}
                disabled={loading}
                sx={{ py: 1.5, borderRadius: 6 }}
                variant="contained"
                onClick={handleSubmit}
                fullWidth>
                创建
              </LoadingButton>

            </Box>
          </CardContent>
        </Card>
      </div>
  
    </Layout>
  );
}

export default HomePage;

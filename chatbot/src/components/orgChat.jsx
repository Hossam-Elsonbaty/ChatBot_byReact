import React, {useState,useRef} from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import { Button as PrimeButton}  from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button, Modal } from 'antd';
export default function OrgChat() {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [value, setValue] = useState()
  const [label, setLabel] = useState()
  const [modalText, setModalText] = useState('Content of the modal');
  const toast = useRef(null);
  const menuLeft = useRef(null);
  const [data] = useState([
    {
      label: 'Welcome message',
      expanded: true,
      data:'ar',
      id:1,
      children: [
        {
          label: 'Turkey',
          expanded: true,
          id:2,
          children: [
            {
              label: 'Argentina',
              id:3,
            },
            {
              label: 'Croatia',
              id:4,
            }
          ]
        },
        {
          label: 'France',
          expanded: true,
          id:5,
          children: [
            {
              label: 'France',
              id:6,
            },
            {
              label: 'Morocco',
              id:7,
            }
          ]
        }
      ]
    }
  ]);
  const items = [
    {
        label: 'Add response',
        icon: 'pi pi-pencil',
        command: () => {
          showModal()
          // toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
        }
    },
    {
        label: 'Add Child',
        icon: 'pi pi-th-large',
        command: () => {
            toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
            toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
        }
    },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
            //router.push('/fileupload');
        }
    }
  ];
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  const handleClick = (e,id,label) => {
    menuLeft.current.toggle(e)
    setLabel(label)
  };

  const nodeTemplate = (node) => {
    return (
        <div className="flex flex-column align-items-center">
          <div className="mt-3 font-medium text-lg org-container" key={node.id}>
            <span className='nodeLabel'>{node.label} </span>
            <div className='dots'>
              <Toast ref={toast}></Toast>
              <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
              <PrimeButton icon="pi pi-ellipsis-v" className="mr-2" onClick={(e)=>{handleClick(e,node.id,node.label)}} aria-controls="popup_menu_left" aria-haspopup />
            </div>
          </div>
        </div>
    );
  };
  return (
    <>
      <div className="card overflow-x-auto">
        <OrganizationChart value={data}  nodeTemplate={nodeTemplate}/>
      </div>
      <Modal
        title="BOT RESPONSE"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div className='modal-container'>
          <InputText id="username" value={label} onChange={(e) => setLabel(e.target.value)} />
          <InputTextarea id="username" placeholder='Response' value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
      </Modal>
    </>
  )
}

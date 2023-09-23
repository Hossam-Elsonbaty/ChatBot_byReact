import React, {useState} from 'react';
import { OrganizationChart } from 'primereact/organizationchart';

export default function OrgChat() {
  const [data] = useState([
    {
      label: 'Argentina',
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
  const nodeTemplate = (node) => {
    return (
        <div className="flex flex-column align-items-center">
          <div className="mt-3 font-medium text-lg" key={node.id}>{node.label} <button className='dots'><i className='pi pi-ellipsis-v'></i></button></div>
        </div>
    );
  };
  return (
    <>
      <div className="card overflow-x-auto">
        <OrganizationChart value={data}  nodeTemplate={nodeTemplate}/>
      </div>
    </>
  )
}

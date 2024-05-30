'use client'

import { useState } from 'react';
import Table, { PrismaModels } from '../../table';

type Props = {
    modelName: string;
    values: any;
    lang?: string;
};

const Children = ({
  modelName,
  values,
  lang = 'en',
}: Props) => {
  const [rows, setRows] = useState(values);

  const processRowUpdate = async (newRow: any, oldRow: any) => {
    // Implement the logic to handle row updates, such as updating the database.
    // For now, we'll just return the new row.
    return newRow;
  };

  const fields = {id: { name: 'id', type: 'id' } };

  return (
    <div className="w-full p-4">
      <div className="flex justify-between p-4">
        <h2 className="text-lg font-medium">{modelName}</h2>
      </div>

      <Table
        model={modelName as PrismaModels}
        fields={fields}
        lang={lang}
      />
    </div>
  );
};

export default Children;

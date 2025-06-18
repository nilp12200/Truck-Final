

// // const express = require('express');
// // const cors = require('cors');
// // const bodyParser = require('body-parser');
// // const sql = require('mssql');
// // require('dotenv').config();

// // const app = express();
// // const PORT = process.env.PORT || 3001;

// // app.use(cors());
// // app.use(bodyParser.json());

// // // SQL Server configuration
// // const dbConfig = {
// //   user: 'sa',
// //   password: '1234',
// //   server: 'localhost', // or 'LAPTOP-AID7B66K\\SQLEXPRESS'
// //   database: 'Truck_Tracking',
// //   port: 1433,
// //   options: {
// //     encrypt: false,
// //     trustServerCertificate: true,
// //   },
// // };

// // // Use a global connection pool
// // let pool;
// // async function getPool() {
// //   if (pool) return pool;
// //   pool = await sql.connect(dbConfig);
// //   return pool;
// // }

// // // 🔐 Login API
// // app.post('/api/login', async (req, res) => {
// //   const { username, password } = req.body;
// //   console.log('Login attempt:', username, password);

// //   try {
// //     const pool = await getPool();
// //     const result = await pool.request()
// //       .input('username', sql.NVarChar, username)
// //       .input('password', sql.NVarChar, password)
// //       .query('SELECT * FROM Users WHERE Username = @username AND Password = @password');

// //     if (result.recordset.length > 0) {
// //       res.json({ success: true, message: 'Login successful' });
// //     } else {
// //       res.status(401).json({ success: false, message: 'Invalid credentials' });
// //     }
// //   } catch (err) {
// //     console.error('SQL error:', err);
// //     res.status(500).json({ success: false, message: 'Server error' });
// //   }
// // });










// // app.post('/api/plantmaster', async (req, res) => {
// //   const { plantName, plantAddress, contactPerson, mobileNo, remarks } = req.body;

// //   if (!plantName) {
// //     return res.status(400).json({ message: 'PlantName is required' });
// //   }

// //   try {
// //     const pool = await sql.connect(dbConfig);
// //     await pool.request()
// //       .input('PlantName', sql.VarChar(200), plantName)
// //       .input('PlantAddress', sql.VarChar(sql.MAX), plantAddress || '')
// //       .input('ContactPerson', sql.VarChar(200), contactPerson || '')
// //       .input('MobileNo', sql.VarChar(50), mobileNo || '')
// //       .input('Remarks', sql.VarChar(sql.MAX), remarks || '')
// //       .query(`
// //         INSERT INTO PlantMaster (PlantName, PlantAddress, ContactPerson, MobileNo, Remarks)
// //         VALUES (@PlantName, @PlantAddress, @ContactPerson, @MobileNo, @Remarks)
// //       `);

// //     res.status(200).json({ message: 'Plant details submitted successfully.' });
// //   } catch (error) {
// //     console.error('Insert error:', error);
// //     res.status(500).json({ message: 'Error inserting plant details' });
// //   }
// // });



// // app.post('/api/plantmaster', async (req, res) => {
// //   const { plantName, plantAddress, contactPerson, mobileNo, remarks } = req.body;

// //   if (!plantName) {
// //     return res.status(400).json({ message: 'PlantName is required' });
// //   }

// //   try {
// //     const pool = await sql.connect(dbConfig);
// //     await pool.request()
// //       .input('PlantName', sql.VarChar(200), plantName)
// //       .input('PlantAddress', sql.VarChar(sql.MAX), plantAddress || '')
// //       .input('ContactPerson', sql.VarChar(200), contactPerson || '')
// //       .input('MobileNo', sql.VarChar(50), mobileNo || '')
// //       .input('Remarks', sql.VarChar(sql.MAX), remarks || '')
// //       .query(`
// //         INSERT INTO PlantMaster (PlantName, PlantAddress, ContactPerson, MobileNo, Remarks)
// //         VALUES (@PlantName, @PlantAddress, @ContactPerson, @MobileNo, @Remarks)
// //       `);

// //     res.status(200).json({ message: 'Plant details submitted successfully.' });
// //   } catch (error) {
// //     console.error('Insert error:', error);
// //     res.status(500).json({ message: 'Error inserting plant details' });
// //   }
// // });


// // // app.get('/api/plants', async (req, res) => {
// // //   try {
// // //     const pool = await sql.connect(dbConfig);
// // //     const result = await pool.request().query('SELECT PlantName FROM PlantMaster');
// // //     const names = result.recordset.map(row => row.PlantName);
// // //     res.json(names);
// // //   } catch (error) {
// // //     console.error('Error fetching plant names:', error);
// // //     res.status(500).json({ error: 'Failed to fetch plant names' });
// // //   }
// // // });
// // app.get('/api/plants', async (req, res) => {
// //   try {
// //     const pool = await getPool();
// //     const result = await pool.request().query('SELECT PlantName FROM PlantMaster');
// //     const plantNames = result.recordset.map(row => row.PlantName);
// //     res.json(plantNames);
// //   } catch (error) {
// //     console.error('Error fetching plants:', error);
// //     res.status(500).json({ error: 'Server error' });
// //   }
// // });



// // // 🚛 Truck Transaction API
// // // app.post('/api/truck-transaction', async (req, res) => {
// // //   const { formData, tableData } = req.body;

// // //   try {
// // //     const pool = await getPool();
// // //     const transaction = new sql.Transaction(pool);
// // //     await transaction.begin();

// // //     // Insert main transaction record
// // //     const insertMain = await transaction.request()
// // //       .input('TruckNo', sql.VarChar, formData.truckNo)
// // //       .input('TransactionDate', sql.Date, formData.transactionDate)
// // //       .input('CityName', sql.VarChar, formData.cityName)
// // //       .input('Transporter', sql.VarChar, formData.transporter)
// // //       .input('AmountPerTon', sql.Decimal(10, 2), formData.amountPerTon)
// // //       .input('TruckWeight', sql.Decimal(10, 2), formData.truckWeight)
// // //       .input('DeliverPoint', sql.VarChar, formData.deliverPoint)
// // //       .input('Remarks', sql.VarChar, formData.remarks)
// // //       .query(`
// // //         INSERT INTO TruckTransactionMaster
// // //         (TruckNo, TransactionDate, CityName, Transporter, AmountPerTon, TruckWeight, DeliverPoint, Remarks, CreatedAt)
// // //         OUTPUT INSERTED.TransactionID
// // //         VALUES (@TruckNo, @TransactionDate, @CityName, @Transporter, @AmountPerTon, @TruckWeight, @DeliverPoint, @Remarks, GETDATE())
// // //       `);

// // //     const transactionId = insertMain.recordset[0].TransactionID;

// // //     // Insert loading detail records
// // //     for (const row of tableData) {
// // //   // Get PlantId from PlantName
// // //   const plantResult = await transaction.request()
// // //     .input('PlantName', sql.VarChar, row.plantName)
// // //     .query('SELECT PlantId FROM PlantMaster WHERE PlantName = @PlantName');

// // //   const plantId = plantResult.recordset[0]?.Id;

// // //   if (!plantId) {
// // //     throw new Error(`Plant not found: ${row.plantName}`);
// // //   }

// // //   await transaction.request()
// // //   .input('TransactionID', sql.Int, transactionId)
// // //   .input('PlantId', sql.Int, plantId)
// // //   .input('LoadingSlipNo', sql.VarChar, row.loadingSlipNo)
// // //   .input('Qty', sql.Decimal(10, 2), row.qty)
// // //   .input('Priority', sql.VarChar, row.priority)
// // //   .input('Freight', sql.VarChar, row.freight)
// // //   .query(`
// // //     INSERT INTO TruckTransactionDetails
// // //     (TransactionID, PlantId, LoadingSlipNo, Qty, Priority, Freight)
// // //     VALUES (@TransactionID, @PlantId, @LoadingSlipNo, @Qty, @Priority, @Freight)
// // //   `);
// // //   }



     

        
// // //     await transaction.commit();
// // //     res.json({ success: true });
// // //   } catch (error) {
// // //     console.error('Transaction failed:', error);
// // //     res.status(500).json({ success: false, error: 'Transaction failed' });
// // //   }
// // // });
// // // app.post('/api/truck-transaction', async (req, res) => {
// // //   const { formData, tableData } = req.body;

// // //   try {
// // //     const pool = await getPool();
// // //     const transaction = new sql.Transaction(pool);
// // //     await transaction.begin();

// // //     // Insert into TruckTransactionMaster
// // //     const insertMain = await transaction.request()
// // //       .input('TruckNo', sql.VarChar, formData.truckNo)
// // //       .input('TransactionDate', sql.Date, formData.transactionDate)
// // //       .input('CityName', sql.VarChar, formData.cityName)
// // //       .input('Transporter', sql.VarChar, formData.transporter)
// // //       .input('AmountPerTon', sql.Decimal(10, 2), formData.amountPerTon)
// // //       .input('TruckWeight', sql.Decimal(10, 2), formData.truckWeight)
// // //       .input('DeliverPoint', sql.VarChar, formData.deliverPoint)
// // //       .input('Remarks', sql.VarChar, formData.remarks)
// // //       .query(`
// // //         INSERT INTO TruckTransactionMaster
// // //         (TruckNo, TransactionDate, CityName, Transporter, AmountPerTon, TruckWeight, DeliverPoint, Remarks, CreatedAt)
// // //         OUTPUT INSERTED.TransactionID
// // //         VALUES (@TruckNo, @TransactionDate, @CityName, @Transporter, @AmountPerTon, @TruckWeight, @DeliverPoint, @Remarks, GETDATE())
// // //       `);

// // //     const transactionId = insertMain.recordset[0].TransactionID;

// // //     // Insert into TruckTransactionDetails
// // //     for (const row of tableData) {
// // //       const plantResult = await transaction.request()
// // //         .input('PlantName', sql.VarChar, row.plantName)
// // //         .query(`SELECT PlantId FROM PlantMaster WHERE PlantName = @PlantName`);

// // //       const plantId = plantResult.recordset[0]?.PlantId;

// // //       if (!plantId) {
// // //         throw new Error(`Plant not found: ${row.plantName}`);
// // //       }

// // //       await transaction.request()
// // //         .input('TransactionID', sql.Int, transactionId)
// // //         .input('PlantId', sql.Int, plantId)
// // //         .input('LoadingSlipNo', sql.VarChar, row.loadingSlipNo)
// // //         .input('Qty', sql.Decimal(10, 2), row.qty)
// // //         .input('Priority', sql.VarChar, row.priority)
   
// // //         .input('Freight', sql.VarChar, row.freight)
     
// // //         .query(`
// // //           INSERT INTO TruckTransactionDetails
// // //           (TransactionID, PlantId, LoadingSlipNo, Qty, Priority, Freight)
// // //           VALUES (@TransactionID, @PlantId, @LoadingSlipNo, @Qty, @Priority, @Freight)
// // //         `);
// // //     }

// // //     await transaction.commit();
// // //     res.json({ success: true });
// // //   } catch (error) {
// // //     console.error('Transaction failed:', error);
// // //     res.status(500).json({ success: false, error: error.message });
// // //   }
// // // });


// // app.post('/api/truck-transaction', async (req, res) => {
// //   const { formData, tableData } = req.body;

// //   try {
// //     const pool = await getPool();
// //     const transaction = new sql.Transaction(pool);
// //     await transaction.begin();

// //     // Insert into TruckTransactionMaster
// //     const insertMain = await transaction.request()
// //       .input('TruckNo', sql.VarChar, formData.truckNo)
// //       .input('TransactionDate', sql.Date, formData.transactionDate)
// //       .input('CityName', sql.VarChar, formData.cityName)
// //       .input('Transporter', sql.VarChar, formData.transporter)
// //       .input('AmountPerTon', sql.Decimal(10, 2), parseFloat(formData.amountPerTon || 0))
// //       .input('TruckWeight', sql.Decimal(10, 2), parseFloat(formData.truckWeight || 0))
// //       .input('DeliverPoint', sql.VarChar, formData.deliverPoint)
// //       .input('Remarks', sql.VarChar, formData.remarks || null)
// //       .query(`
// //         INSERT INTO TruckTransactionMaster
// //         (TruckNo, TransactionDate, CityName, Transporter, AmountPerTon, TruckWeight, DeliverPoint, Remarks, CreatedAt)
// //         OUTPUT INSERTED.TransactionID
// //         VALUES (@TruckNo, @TransactionDate, @CityName, @Transporter, @AmountPerTon, @TruckWeight, @DeliverPoint, @Remarks, GETDATE())
// //       `);

// //     const transactionId = insertMain.recordset[0].TransactionID;

// //     // Insert into TruckTransactionDetails
// //     for (const row of tableData) {
// //       const plantResult = await transaction.request()
// //         .input('PlantName', sql.VarChar, row.plantName)
// //         .query(`SELECT PlantId FROM PlantMaster WHERE PlantName = @PlantName`);

// //       const plantId = plantResult.recordset[0]?.PlantId;

// //       if (!plantId) {
// //         throw new Error(`Plant not found: ${row.plantName}`);
// //       }

// //       await transaction.request()
// //   .input('TransactionID', sql.Int, transactionId)
// //   .input('PlantId', sql.Int, plantId)
// //   .input('LoadingSlipNo', sql.VarChar, row.loadingSlipNo)
// //   .input('Qty', sql.Decimal(10, 2), row.qty)
// //   .input('Priority', sql.VarChar, row.priority)
// //   .input('Freight', sql.VarChar, row.freight)
// //   .input('Remarks', sql.VarChar, row.remarks) // 👈 Add this line
// //   .query(`
// //     INSERT INTO TruckTransactionDetails
// //     (TransactionID, PlantId, LoadingSlipNo, Qty, Priority, Freight, Remarks) -- 👈 Include Remarks
// //     VALUES (@TransactionID, @PlantId, @LoadingSlipNo, @Qty, @Priority, @Freight, @Remarks)
// //   `);

// //     }

// //     await transaction.commit();
// //     res.json({ success: true });
// //   } catch (error) {
// //     console.error('Transaction failed:', error);
// //     res.status(500).json({ success: false, error: error.message });
// //   }
// // });

// // // server.js or route file
// // // app.get('/api/trucks', async (req, res) => {
// // //   const { plantName } = req.query;
// // //   try {
// // //     const pool = await getPool();

// // //     const result = await pool.request()
// // //       .input('plantName', plantName)
// // //       .query(`
// // //         SELECT DISTINCT m.TruckNo
// // //         FROM PlantMaster p
// // //         JOIN TruckTransactionDetails d ON p.PlantID = d.PlantID
// // //         JOIN TruckTransactionMaster m ON d.TransactionID = m.TransactionID
// // //         WHERE p.PlantName = @plantName
// // //       `);

// // //     res.json(result.recordset);
// // //   } catch (error) {
// // //     console.error('Error fetching truck numbers:', error);
// // //     res.status(500).json({ error: 'Server error' });
// // //   }
// // // });
// // app.get('/api/trucks', async (req, res) => {
// //   const { plantName } = req.query;
// //   try {
// //     const pool = await getPool();

// //    const result = await pool.request()
// //   .input('plantName', plantName)
// //   .query(`
// //    SELECT DISTINCT m.TruckNo
// // FROM PlantMaster p
// // JOIN TruckTransactionDetails d ON p.PlantID = d.PlantId
// // JOIN TruckTransactionMaster m ON d.TransactionId = m.TransactionID
// // WHERE p.PlantName = @plantName
// //   AND d.CheckInStatus = 0
// //   AND m.Completed = 0

// //   `);

// //     res.json(result.recordset);
// //   } catch (error) {
// //     console.error('Error fetching truck numbers:', error);
// //     res.status(500).json({ error: 'Server error' });
// //   }
// // });
// // // app.post('/api/update-truck-status', async (req, res) => {
// // //   const { truckNo, plantName, type } = req.body;

// // //   try {
// // //     const pool = await getPool();

// // //     // 1. Get TransactionID from TruckTransactionMaster
// // //     const transactionResult = await pool.request()
// // //       .input('TruckNo', sql.VarChar, truckNo)
// // //       .query(`
// // //         SELECT TOP 1 TransactionID 
// // //         FROM TruckTransactionMaster 
// // //         WHERE TruckNo = @TruckNo 
// // //         ORDER BY TransactionID DESC
// // //       `);

// // //     if (transactionResult.recordset.length === 0) {
// // //       return res.status(404).json({ message: 'Truck not found' });
// // //     }

// // //     const transactionId = transactionResult.recordset[0].TransactionID;

// // //     // 2. Get PlantId from PlantMaster
// // //     const plantResult = await pool.request()
// // //       .input('PlantName', sql.VarChar, plantName)
// // //       .query(`
// // //         SELECT TOP 1 PlantId 
// // //         FROM PlantMaster 
// // //         WHERE PlantName = @PlantName
// // //       `);

// // //     if (plantResult.recordset.length === 0) {
// // //       return res.status(404).json({ message: 'Plant not found' });
// // //     }

// // //     const plantId = plantResult.recordset[0].PlantId;

// // //     // 3. Get current status
// // //     const statusResult = await pool.request()
// // //       .input('PlantId', sql.Int, plantId)
// // //       .input('TransactionID', sql.Int, transactionId)
// // //       .query(`
// // //         SELECT CheckInStatus, CheckOutStatus
// // //         FROM TruckTransactionDetails
// // //         WHERE PlantId = @PlantId AND TransactionID = @TransactionID
// // //       `);

// // //     if (statusResult.recordset.length === 0) {
// // //       return res.status(404).json({ message: 'No detail record found for this truck and plant' });
// // //     }

// // //     const status = statusResult.recordset[0];

// // //     // 4. Update status based on type
// // //     if (type === 'Check In' && status.CheckInStatus === 0) {
// // //       await pool.request()
// // //         .input('PlantId', sql.Int, plantId)
// // //         .input('TransactionID', sql.Int, transactionId)
// // //         .query(`
// // //           UPDATE TruckTransactionDetails
// // //           SET CheckInStatus = 1
// // //           WHERE PlantId = @PlantId AND TransactionID = @TransactionID
// // //         `);
// // //     }

// // //     if (type === 'Check Out' && status.CheckOutStatus === 0) {
// // //       await pool.request()
// // //         .input('PlantId', sql.Int, plantId)
// // //         .input('TransactionID', sql.Int, transactionId)
// // //         .query(`
// // //           UPDATE TruckTransactionDetails
// // //           SET CheckOutStatus = 1
// // //           WHERE PlantId = @PlantId AND TransactionID = @TransactionID
// // //         `);
// // //     }

// // //     // 5. Re-fetch status after update
// // //     const updatedStatus = await pool.request()
// // //       .input('PlantId', sql.Int, plantId)
// // //       .input('TransactionID', sql.Int, transactionId)
// // //       .query(`
// // //         SELECT CheckInStatus, CheckOutStatus
// // //         FROM TruckTransactionDetails
// // //         WHERE PlantId = @PlantId AND TransactionID = @TransactionID
// // //       `);

// // //     const updated = updatedStatus.recordset[0];

// // //     if (updated.CheckInStatus === 1 && updated.CheckOutStatus === 1) {
// // //       return res.json({ message: '✅ Completed' });
// // //     }

// // //     return res.json({ message: `${type} successful` });

// // //   } catch (error) {
// // //     console.error('Status update error:', error);
// // //     res.status(500).json({ error: 'Server error' });
// // //   }
// // // });

// // // app.get('/api/checked-in-trucks', async (req, res) => {
// // //   try {
// // //     const pool = await getPool();

// // //     const result = await pool.request()
// // //       .query(`
// // //         SELECT DISTINCT TruckNo
// // //         FROM TruckTransactionMaster
// // //         WHERE CheckInStatus = 1 AND CheckOutStatus =0
// // //       `);

// // //     res.json(result.recordset);
// // //   } catch (error) {
// // //     console.error('Error fetching checked-in trucks:', error);
// // //     res.status(500).json({ error: 'Server error' });
// // //   }
// // // });


// // // app.get('/api/checked-in-trucks', async (req, res) => {
// // //   const { truckNo } = req.query; // Get truck number from query parameters

// // //   try {
// // //     const pool = await getPool();

// // //     const request = pool.request();

// // //     if (truckNo) {
// // //       request.input('truckNo', truckNo);
// // //     }

// // //     const result = await request.query(`
// // //             SELECT DISTINCT m.TruckNo
// // //         FROM PlantMaster p
// // //         JOIN TruckTransactionDetails d ON p.PlantID = d.PlantID
// // //         JOIN TruckTransactionMaster m ON d.TransactionID = m.TransactionID
// // //         WHERE p.PlantName = @plantName
// // //         AND m.CheckInStatus = 1
// // //         AND m.CheckOutStatus = 0
// // //       ${truckNo ? 'AND TruckNo = @truckNo' : ''}
// // //     `);

// // //     res.json(result.recordset);
// // //   } catch (error) {
// // //     console.error('Error fetching checked-in truck:', error);
// // //     res.status(500).json({ error: 'Server error' });
// // //   }
// // // });

// // app.post('/api/update-truck-status', async (req, res) => {
// //   const { truckNo, plantName, type } = req.body;

// //   try {
// //     const pool = await getPool();

// //     // 1. Get TransactionID
// //     const transactionResult = await pool.request()
// //       .input('truckNo', sql.VarChar, truckNo)
// //       .query(`
// //         SELECT TOP 1 TransactionID 
// //         FROM TruckTransactionMaster 
// //         WHERE TruckNo = @truckNo AND Completed = 0
// //         ORDER BY TransactionID DESC
// //       `);

// //     if (transactionResult.recordset.length === 0) {
// //       return res.status(404).json({ message: '❌ Truck not found or already completed' });
// //     }

// //     const transactionId = transactionResult.recordset[0].TransactionID;

// //     // 2. Get PlantId
// //     const plantResult = await pool.request()
// //       .input('plantName', sql.VarChar, plantName)
// //       .query(`
// //         SELECT TOP 1 PlantId 
// //         FROM PlantMaster 
// //         WHERE PlantName = @plantName
// //       `);

// //     if (plantResult.recordset.length === 0) {
// //       return res.status(404).json({ message: '❌ Plant not found' });
// //     }

// //     const plantId = plantResult.recordset[0].PlantId;

// //     // 3. Get current status
// //     const statusResult = await pool.request()
// //       .input('PlantId', sql.Int, plantId)
// //       .input('TransactionID', sql.Int, transactionId)
// //       .query(`
// //         SELECT CheckInStatus, CheckOutStatus
// //         FROM TruckTransactionDetails
// //         WHERE PlantId = @PlantId AND TransactionID = @TransactionID
// //       `);

// //     if (statusResult.recordset.length === 0) {
// //       return res.status(404).json({ message: '❌ Truck detail not found for this plant' });
// //     }

// //     const status = statusResult.recordset[0];

// //     // 4. Update check-in or check-out
// //     if (type === 'Check In' && status.CheckInStatus === 0) {
// //       await pool.request()
// //         .input('PlantId', sql.Int, plantId)
// //         .input('TransactionID', sql.Int, transactionId)
// //         .query(`
// //           UPDATE TruckTransactionDetails
// //           SET CheckInStatus = 1
// //           WHERE PlantId = @PlantId AND TransactionID = @TransactionID
// //         `);
// //     }

// //     if (type === 'Check Out') {
// //   if (status.CheckInStatus === 0) {
// //     return res.status(400).json({ message: '❌ Please Check In first before Check Out' });
// //   }

// //   if (status.CheckOutStatus === 0) {
// //     await pool.request()
// //       .input('PlantId', sql.Int, plantId)
// //       .input('TransactionID', sql.Int, transactionId)
// //       .query(`
// //         UPDATE TruckTransactionDetails
// //         SET CheckOutStatus = 1
// //         WHERE PlantId = @PlantId AND TransactionID = @TransactionID
// //       `);
// //   }
// // }


// //     // 5. Recheck updated status
// //    // 6. Check if all plants for this transaction are checked-in and checked-out
// // const allStatusResult = await pool.request()
// //   .input('TransactionID', sql.Int, transactionId)
// //   .query(`
// //     SELECT COUNT(*) AS TotalPlants,
// //            SUM(CASE WHEN CheckInStatus = 1 THEN 1 ELSE 0 END) AS CheckedIn,
// //            SUM(CASE WHEN CheckOutStatus = 1 THEN 1 ELSE 0 END) AS CheckedOut
// //     FROM TruckTransactionDetails
// //     WHERE TransactionID = @TransactionID
// //   `);

// // const statusCheck = allStatusResult.recordset[0];

// // if (
// //   statusCheck.TotalPlants === statusCheck.CheckedIn &&
// //   statusCheck.TotalPlants === statusCheck.CheckedOut
// // ) {
// //   // All plants completed
// //   await pool.request()
// //     .input('TransactionID', sql.Int, transactionId)
// //     .query(`
// //       UPDATE TruckTransactionMaster
// //       SET Completed = 1
// //       WHERE TransactionID = @TransactionID
// //     `);

// //   return res.json({ message: '✅ All plants processed. Truck process completed.' });
// // }


// //     // 7. Return success for one action
// //     return res.json({ message: `✅ ${type} successful` });

// //   } catch (error) {
// //     console.error('Status update error:', error);
// //     res.status(500).json({ error: 'Server error' });
// //   }
// // });


// // // app.get('/api/checked-in-trucks', async (req, res) => {
// // //   const { plantName } = req.query;
// // //   try {
// // //     const pool = await getPool();

// // //     const result = await pool.request()
// // //   .input('plantName', sql.VarChar, plantName) // Ensure proper input type
// // //   .query(`
// // //     SELECT DISTINCT m.TruckNo
// // //     FROM PlantMaster p
// // //     JOIN TruckTransactionDetails d ON p.PlantID = d.PlantID
// // //     JOIN TruckTransactionDetails m ON d.TransactionID = m.TransactionID
// // //     WHERE p.PlantName = @plantName
// // //     AND m.CheckInStatus = 1
// // //     AND m.CheckOutStatus = 0
// // //   `);

// // //     res.json(result.recordset);
// // //   } catch (error) {
// // //     console.error('Error fetching truck numbers:', error);
// // //     res.status(500).json({ error: 'Server error' });
// // //   }
// // // });

// // app.get('/api/checked-in-trucks', async (req, res) => {
// //   const { plantName } = req.query;
// //   try {
// //     const pool = await getPool();

// //     const result = await pool.request()
// //       .input('plantName', sql.VarChar, plantName)
// //       .query(`
// //         SELECT DISTINCT m.TruckNo
// //         FROM PlantMaster p
// //         JOIN TruckTransactionDetails d ON p.PlantID = d.PlantID
// //         JOIN TruckTransactionMaster m ON d.TransactionID = m.TransactionID
// //         WHERE p.PlantName = @plantName
// //           AND d.CheckInStatus = 1
// //           AND d.CheckOutStatus = 0
// //       `);

// //     res.json(result.recordset);
// //   } catch (error) {
// //     console.error('Error fetching truck numbers:', error);
// //     res.status(500).json({ error: 'Server error' });
// //   }
// // });

// // // 🚀 Start the server
// // app.listen(PORT, () => {
// //   console.log(`🚀 Server is running at http://localhost:${PORT}`);
// // });
































// // Description: This is the backend server for the Truck Tracking application.
// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const sql = require("mssql");
// require("dotenv").config();

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(cors());
// app.use(bodyParser.json());

// // SQL Server configuration
// const dbConfig = {
//   user: "sa",
//   password: "1234",
//   server: "localhost", // or 'LAPTOP-AID7B66K\\SQLEXPRESS'
//   database: "Truck_Tracking",
//   port: 1433,
//   options: {
//     encrypt: false,
//     trustServerCertificate: true,
//   },
// };

// // Use a global connection pool
// let pool;
// async function getPool() {
//   if (pool) return pool;
//   pool = await sql.connect(dbConfig);
//   return pool;
// }

// // 🔐 Login API
// app.post("/api/login", async (req, res) => {
//   const { username, password } = req.body;
//   console.log("Login attempt:", username, password);

//   try {
//     const pool = await getPool();
//     const result = await pool
//       .request()
//       .input("username", sql.NVarChar, username)
//       .input("password", sql.NVarChar, password)
//       .query(
//         "SELECT * FROM Users WHERE Username = @username AND Password = @password"
//       );

//     if (result.recordset.length > 0) {
//       res.json({ success: true, message: "Login successful" });
//     } else {
//       res.status(401).json({ success: false, message: "Invalid credentials" });
//     }
//   } catch (err) {
//     console.error("SQL error:", err);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// });

// // 🌱 Plant Master API
// app.post("/api/plantmaster", async (req, res) => {
//   const { plantName, plantAddress, contactPerson, mobileNo, remarks } =
//     req.body;

//   if (!plantName) {
//     return res.status(400).json({ message: "PlantName is required" });
//   }

//   try {
//     const pool = await sql.connect(dbConfig);
//     await pool
//       .request()
//       .input("PlantName", sql.VarChar(200), plantName)
//       .input("PlantAddress", sql.VarChar(sql.MAX), plantAddress || "")
//       .input("ContactPerson", sql.VarChar(200), contactPerson || "")
//       .input("MobileNo", sql.VarChar(50), mobileNo || "")
//       .input("Remarks", sql.VarChar(sql.MAX), remarks || "").query(`
//         INSERT INTO PlantMaster (PlantName, PlantAddress, ContactPerson, MobileNo, Remarks)
//         VALUES (@PlantName, @PlantAddress, @ContactPerson, @MobileNo, @Remarks)
//       `);

//     res.status(200).json({ message: "Plant details submitted successfully." });
//   } catch (error) {
//     console.error("Insert error:", error);
//     res.status(500).json({ message: "Error inserting plant details" });
//   }
// });

// // 🌱 Plant Master API
// app.post("/api/plantmaster", async (req, res) => {
//   const { plantName, plantAddress, contactPerson, mobileNo, remarks } =
//     req.body;

//   if (!plantName) {
//     return res.status(400).json({ message: "PlantName is required" });
//   }

//   try {
//     const pool = await sql.connect(dbConfig);
//     await pool
//       .request()
//       .input("PlantName", sql.VarChar(200), plantName)
//       .input("PlantAddress", sql.VarChar(sql.MAX), plantAddress || "")
//       .input("ContactPerson", sql.VarChar(200), contactPerson || "")
//       .input("MobileNo", sql.VarChar(50), mobileNo || "")
//       .input("Remarks", sql.VarChar(sql.MAX), remarks || "").query(`
//         INSERT INTO PlantMaster (PlantName, PlantAddress, ContactPerson, MobileNo, Remarks)
//         VALUES (@PlantName, @PlantAddress, @ContactPerson, @MobileNo, @Remarks)
//       `);

//     res.status(200).json({ message: "Plant details submitted successfully." });
//   } catch (error) {
//     console.error("Insert error:", error);
//     res.status(500).json({ message: "Error inserting plant details" });
//   }
// });

// app.get("/api/plants", async (req, res) => {
//   try {
//     const pool = await getPool();
//     const result = await pool
//       .request()
//       .query("SELECT PlantName FROM PlantMaster");
//     const plantNames = result.recordset.map((row) => row.PlantName);
//     res.json(plantNames);
//   } catch (error) {
//     console.error("Error fetching plants:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // 🚚 Truck Transaction API
// app.post("/api/truck-transaction", async (req, res) => {
//   const { formData, tableData } = req.body;

//   try {
//     const pool = await getPool();
//     const transaction = new sql.Transaction(pool);
//     await transaction.begin();

//     // Insert into TruckTransactionMaster
//     const insertMain = await transaction
//       .request()
//       .input("TruckNo", sql.VarChar, formData.truckNo)
//       .input("TransactionDate", sql.Date, formData.transactionDate)
//       .input("CityName", sql.VarChar, formData.cityName)
//       .input("Transporter", sql.VarChar, formData.transporter)
//       .input("AmountPerTon", sql.Decimal(10, 2), formData.amountPerTon)
//       .input("TruckWeight", sql.Decimal(10, 2), formData.truckWeight)
//       .input("DeliverPoint", sql.VarChar, formData.deliverPoint)
//       .input("Remarks", sql.VarChar, formData.remarks).query(`
//         INSERT INTO TruckTransactionMaster
//         (TruckNo, TransactionDate, CityName, Transporter, AmountPerTon, TruckWeight, DeliverPoint, CreatedAt,Remarks)
//         OUTPUT INSERTED.TransactionID
//         VALUES (@TruckNo, @TransactionDate, @CityName, @Transporter, @AmountPerTon, @TruckWeight, @DeliverPoint, GETDATE(),@Remarks)
//       `);

//     const transactionId = insertMain.recordset[0].TransactionID;

//     // Insert into TruckTransactionDetails
//     for (const row of tableData) {
//       const plantResult = await transaction
//         .request()
//         .input("PlantName", sql.VarChar, row.plantName)
//         .query(`SELECT PlantId FROM PlantMaster WHERE PlantName = @PlantName`);

//       const plantId = plantResult.recordset[0]?.PlantId;

//       if (!plantId) {
//         throw new Error(`Plant not found: ${row.plantName}`);
//       }

//       await transaction
//         .request()
//         .input("TransactionID", sql.Int, transactionId)
//         .input("PlantId", sql.Int, plantId)
//         .input("LoadingSlipNo", sql.VarChar, row.loadingSlipNo)
//         .input("Qty", sql.Decimal(10, 2), row.qty)
//         .input("Priority", sql.VarChar, row.priority)
//         .input("Remarks", sql.VarChar, row.remarks || "")
//         .input("Freight", sql.VarChar, row.freight).query(`
//           INSERT INTO TruckTransactionDetails
//           (TransactionID, PlantId, LoadingSlipNo, Qty, Priority, Remarks, Freight)
//           VALUES (@TransactionID, @PlantId, @LoadingSlipNo, @Qty, @Priority, @Remarks, @Freight)
//         `);
//     }

//     await transaction.commit();
//     res.json({ success: true });
//   } catch (error) {
//     console.error("Transaction failed:", error);
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // 🚚 Fetch Truck Numbers API
// app.get("/api/trucks", async (req, res) => {
//   const { plantName } = req.query;
//   try {
//     const pool = await getPool();

//     const result = await pool.request().input("plantName", plantName).query(`
//    SELECT DISTINCT m.TruckNo
// FROM PlantMaster p
// JOIN TruckTransactionDetails d ON p.PlantID = d.PlantId
// JOIN TruckTransactionMaster m ON d.TransactionId = m.TransactionID
// WHERE p.PlantName = @plantName
//   AND d.CheckInStatus = 0
//   AND m.Completed = 0

//   `);

//     res.json(result.recordset);
//   } catch (error) {
//     console.error("Error fetching truck numbers:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // 🚚 Update Truck Status API

// app.post("/api/update-truck-status", async (req, res) => {
//   const { truckNo, plantName, type } = req.body;

//   try {
//     const pool = await getPool();

//     // 1. Get TransactionID
//     const transactionResult = await pool
//       .request()
//       .input("truckNo", sql.VarChar, truckNo).query(`
//         SELECT TOP 1 TransactionID 
//         FROM TruckTransactionMaster 
//         WHERE TruckNo = @truckNo AND Completed = 0
//         ORDER BY TransactionID DESC
//       `);

//     if (transactionResult.recordset.length === 0) {
//       return res
//         .status(404)
//         .json({ message: "❌ Truck not found or already completed" });
//     }

//     const transactionId = transactionResult.recordset[0].TransactionID;

//     // 2. Get PlantId
//     const plantResult = await pool
//       .request()
//       .input("plantName", sql.VarChar, plantName).query(`
//         SELECT TOP 1 PlantId 
//         FROM PlantMaster 
//         WHERE PlantName = @plantName
//       `);

//     if (plantResult.recordset.length === 0) {
//       return res.status(404).json({ message: "❌ Plant not found" });
//     }

//     const plantId = plantResult.recordset[0].PlantId;

//     // 3. Get current status
//     const statusResult = await pool
//       .request()
//       .input("PlantId", sql.Int, plantId)
//       .input("TransactionID", sql.Int, transactionId).query(`
//         SELECT CheckInStatus, CheckOutStatus
//         FROM TruckTransactionDetails
//         WHERE PlantId = @PlantId AND TransactionID = @TransactionID
//       `);

//     if (statusResult.recordset.length === 0) {
//       return res
//         .status(404)
//         .json({ message: "❌ Truck detail not found for this plant" });
//     }

//     const status = statusResult.recordset[0];

//     // 4. Update check-in or check-out
//     if (type === "Check In" && status.CheckInStatus === 0) {
//       await pool
//         .request()
//         .input("PlantId", sql.Int, plantId)
//         .input("TransactionID", sql.Int, transactionId).query(`
//           UPDATE TruckTransactionDetails
//           SET CheckInStatus = 1
//           WHERE PlantId = @PlantId AND TransactionID = @TransactionID
//         `);
//     }

//     if (type === "Check Out") {
//       if (status.CheckInStatus === 0) {
//         return res
//           .status(400)
//           .json({ message: "❌ Please Check In first before Check Out" });
//       }

//       if (status.CheckOutStatus === 0) {
//         await pool
//           .request()
//           .input("PlantId", sql.Int, plantId)
//           .input("TransactionID", sql.Int, transactionId).query(`
//         UPDATE TruckTransactionDetails
//         SET CheckOutStatus = 1
//         WHERE PlantId = @PlantId AND TransactionID = @TransactionID
//       `);
//       }
//     }

//     // 5. Recheck updated status
//     // 6. Check if all plants for this transaction are checked-in and checked-out
//     const allStatusResult = await pool
//       .request()
//       .input("TransactionID", sql.Int, transactionId).query(`
//     SELECT COUNT(*) AS TotalPlants,
//            SUM(CASE WHEN CheckInStatus = 1 THEN 1 ELSE 0 END) AS CheckedIn,
//            SUM(CASE WHEN CheckOutStatus = 1 THEN 1 ELSE 0 END) AS CheckedOut
//     FROM TruckTransactionDetails
//     WHERE TransactionID = @TransactionID
//   `);

//     const statusCheck = allStatusResult.recordset[0];

//     if (
//       statusCheck.TotalPlants === statusCheck.CheckedIn &&
//       statusCheck.TotalPlants === statusCheck.CheckedOut
//     ) {
//       // All plants completed
//       await pool.request().input("TransactionID", sql.Int, transactionId)
//         .query(`
//       UPDATE TruckTransactionMaster
//       SET Completed = 1
//       WHERE TransactionID = @TransactionID
//     `);

//       return res.json({
//         message: "✅ All plants processed. Truck process completed.",
//       });
//     }

//     // 7. Return success for one action
//     return res.json({ message: `✅ ${type} successful` });
//   } catch (error) {
//     console.error("Status update error:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // 🚚 Fetch Checked-in Trucks API
// app.get("/api/checked-in-trucks", async (req, res) => {
//   const { plantName } = req.query;
//   try {
//     const pool = await getPool();

//     const result = await pool
//       .request()
//       .input("plantName", sql.VarChar, plantName).query(`
//         SELECT DISTINCT m.TruckNo
//         FROM PlantMaster p
//         JOIN TruckTransactionDetails d ON p.PlantID = d.PlantID
//         JOIN TruckTransactionMaster m ON d.TransactionID = m.TransactionID
//         WHERE p.PlantName = @plantName
//           AND d.CheckInStatus = 1
//           AND d.CheckOutStatus = 0
//       `);

//     res.json(result.recordset);
//   } catch (error) {
//     console.error("Error fetching truck numbers:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// });




// // // ✅ Corrected: Fetch latest remark from TruckTransactionDetails based on TruckNo only
// // app.get("/api/get-remark", async (req, res) => {
// //   const { truckNo, plantName } = req.query;

// //   try {
// //     const pool = await getPool();

// //     const result = await pool.request()
// //       .input("truckNo", sql.VarChar, truckNo)
// //       .input("plantName", sql.VarChar, plantName)
// //       .query(`
// //         SELECT TOP 1 d.Remark
// //         FROM TruckTransactionDetails d
// //         INNER JOIN TruckTransactionMaster m ON d.TransactionID = m.TransactionID
// //         INNER JOIN PlantMaster p ON d.PlantID = p.PlantID
// //         WHERE m.TruckNo = @truckNo
// //           AND p.PlantName = @plantName
// //           AND d.Remark IS NOT NULL
// //         ORDER BY d.Id DESC
// //       `);

// //     if (result.recordset.length > 0) {
// //       res.json({ remark: result.recordset[0].Remark });
// //     } else {
// //       res.status(404).json({ message: "❌ No remark found for this truck and plant." });
// //     }
// //   } catch (error) {
// //     console.error("Error fetching remark:", error);
// //     res.status(500).json({ error: "Internal server error" });
// //   }
// // });







// /////////////////////////////////////////////////////////////////////////////////////////////////////////////



// // // ✅ Get all plants
// // app.get("/api/plants", async (req, res) => {
// //   try {
// //     const pool = await getPool();
// //     const result = await pool.request().query("SELECT * FROM PlantMaster");
// //     res.json(result.recordset);
// //   } catch (error) {
// //     console.error("Error fetching plants:", error);
// //     res.status(500).json({ error: "Server error" });
// //   }
// // });

// // // ✅ Get single plant by name
// // app.get("/api/plant", async (req, res) => {
// //   const { plantName } = req.query;
// //   try {
// //     const pool = await getPool();
// //     const result = await pool.request()
// //       .input("plantName", sql.VarChar, plantName)
// //       .query("SELECT * FROM PlantMaster WHERE PlantName = @plantName");

// //     if (result.recordset.length > 0) {
// //       res.json(result.recordset[0]);
// //     } else {
// //       res.status(404).json({ message: "❌ Plant not found." });
// //     }
// //   } catch (error) {
// //     console.error("Error fetching plant:", error);
// //     res.status(500).json({ error: "Server error" });
// //   }
// // });

// // // ✅ Update plant details
// // app.put("/api/update-plant", async (req, res) => {
// //   const { plantId, plantName, plantAddress, contactPerson, mobileNo, remarks } = req.body;
// //   try {
// //     const pool = await getPool();
// //     await pool.request()
// //       .input("plantId", sql.Int, plantId)
// //       .input("plantName", sql.VarChar, plantName)
// //       .input("plantAddress", sql.VarChar, plantAddress)
// //       .input("contactPerson", sql.VarChar, contactPerson)
// //       .input("mobileNo", sql.VarChar, mobileNo)
// //       .input("remarks", sql.VarChar, remarks)
// //       .query(`
// //         UPDATE PlantMaster
// //         SET PlantName = @plantName,
// //             PlantAddress = @plantAddress,
// //             ContactPerson = @contactPerson,
// //             MobileNo = @mobileNo,
// //             Remarks = @remarks
// //         WHERE PlantID = @plantId
// //       `);

// //     res.json({ message: "✅ Plant updated successfully." });
// //   } catch (error) {
// //     console.error("Error updating plant:", error);
// //     res.status(500).json({ error: "Server error" });
// //   }
// // });









// app.get('/api/fetch-remarks', async (req, res) => {
//   const { plantName, truckNo } = req.query;

//   try {
//     const pool = await getPool();

//     // Step 1: Get PlantID
//     const plantResult = await pool.request()
//       .input('plantName', sql.VarChar, plantName)
//       .query('SELECT PlantID FROM PlantMaster WHERE PlantName = @plantName');
    
//     if (plantResult.recordset.length === 0) {
//       return res.status(404).json({ message: 'Plant not found' });
//     }
//     const plantId = plantResult.recordset[0].PlantID;

//     // Step 2: Get TransactionID
//     const txnResult = await pool.request()
//       .input('truckNo', sql.VarChar, truckNo)
//       .query('SELECT TransactionID FROM TruckTransactionMaster WHERE TruckNo = @truckNo');
    
//     if (txnResult.recordset.length === 0) {
//       return res.status(404).json({ message: 'Transaction not found' });
//     }
//     const transactionId = txnResult.recordset[0].TransactionID;

//     // Step 3: Fetch Remarks
//     const remarksResult = await pool.request()
//       .input('plantId', sql.Int, plantId)
//       .input('transactionId', sql.Int, transactionId)
//       .query(`
//         SELECT Remarks 
//         FROM TruckTransactionDetails 
//         WHERE PlantID = @plantId AND TransactionID = @transactionId
//       `);

//     if (remarksResult.recordset.length === 0) {
//       return res.status(404).json({ message: 'Remarks not found' });
//     }

//     const remarks = remarksResult.recordset[0].Remarks;
//     res.json({ remarks });

//   } catch (error) {
//     console.error('Error fetching remarks:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// });





// // 🚀 Start the server
// app.listen(PORT, () => {
//   console.log(`🚀 Server is running at http://localhost:${PORT}`);
// });





























// Description: This is the backend server for the Truck Tracking application.
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sql = require("mssql");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// SQL Server configuration
const dbConfig = {
  user: "sa",
  password: "1234",
  server: "localhost", // or 'LAPTOP-AID7B66K\\SQLEXPRESS'
  database: "Truck_Tracking",
  port: 1433,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

// Use a global connection pool
let pool;
async function getPool() {
  if (pool) return pool;
  pool = await sql.connect(dbConfig);
  return pool;
}

// 🔐 Login API
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  console.log("Login attempt:", username, password);

  try {
    const pool = await getPool();
    const result = await pool
      .request()
      .input("username", sql.NVarChar, username)
      .input("password", sql.NVarChar, password)
      .query(
        "SELECT * FROM Users WHERE Username = @username AND Password = @password"
      );

    if (result.recordset.length > 0) {
      res.json({ success: true, message: "Login successful" });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// 🌱 Plant Master API
app.post("/api/plantmaster", async (req, res) => {
  const { plantName, plantAddress, contactPerson, mobileNo, remarks } =
    req.body;

  if (!plantName) {
    return res.status(400).json({ message: "PlantName is required" });
  }

  try {
    const pool = await sql.connect(dbConfig);
    await pool
      .request()
      .input("PlantName", sql.VarChar(200), plantName)
      .input("PlantAddress", sql.VarChar(sql.MAX), plantAddress || "")
      .input("ContactPerson", sql.VarChar(200), contactPerson || "")
      .input("MobileNo", sql.VarChar(50), mobileNo || "")
      .input("Remarks", sql.VarChar(sql.MAX), remarks || "").query(`
        INSERT INTO PlantMaster (PlantName, PlantAddress, ContactPerson, MobileNo, Remarks)
        VALUES (@PlantName, @PlantAddress, @ContactPerson, @MobileNo, @Remarks)
      `);

    res.status(200).json({ message: "Plant details submitted successfully." });
  } catch (error) {
    console.error("Insert error:", error);
    res.status(500).json({ message: "Error inserting plant details" });
  }
});



// 🔹 GET all plants (for dropdown)
app.get('/api/plants', async (req, res) => {
  try {
    await sql.connect(dbConfig);
    const result = await sql.query('SELECT PlantID, PlantName FROM PlantMaster');
    res.json(result.recordset);
  } catch (err) {
    console.error('Error fetching plants:', err);
    res.status(500).send('Server error');
  }
});

// 🔹 GET plant by name (for editing)
// app.get('/api/plantmaster/:plantName', async (req, res) => {
//   const plantName = req.params.plantName;
//   try {
//     await sql.connect(dbConfig);
//     const request = new sql.Request();
//     request.input('plantName', sql.VarChar, plantName);
//     const result = await request.query(`
//       SELECT * FROM PlantMaster WHERE PlantName = @plantName
//     `);
//     if (result.recordset.length > 0) {
//       res.json(result.recordset[0]);
//     } else {
//       res.status(404).json({ error: 'Plant not found' });
//     }
//   } catch (err) {
//     console.error('Error fetching plant by name:', err);
//     res.status(500).send('Server error');
//   }
// });



app.get('/api/plantmaster/:plantName', async (req, res) => {
  const plantName = req.params.plantName?.trim().toLowerCase(); // Normalize input
  try {
    await sql.connect(dbConfig);
    const request = new sql.Request();
    request.input('plantName', sql.VarChar, plantName);
    const result = await request.query(`
      SELECT TOP 1 *
      FROM PlantMaster
      WHERE LOWER(LTRIM(RTRIM(PlantName))) = @plantName
    `);

    if (result.recordset.length > 0) {
      res.json(result.recordset[0]);
    } else {
      res.status(404).json({ error: 'Plant not found' });
    }
  } catch (err) {
    console.error('Error fetching plant by name:', err);
    res.status(500).send('Server error');
  }
});


// 🔹 POST a new plant
app.post('/api/plantmaster', async (req, res) => {
  const { plantName, plantAddress, contactPerson, mobileNo, remarks } = req.body;
  try {
    await sql.connect(dbConfig);
    const request = new sql.Request();
    request.input('PlantName', sql.VarChar, plantName);
    request.input('PlantAddress', sql.VarChar, plantAddress);
    request.input('ContactPerson', sql.VarChar, contactPerson);
    request.input('MobileNo', sql.VarChar, mobileNo);
    request.input('Remarks', sql.VarChar, remarks);
    await request.query(`
      INSERT INTO PlantMaster (PlantName, PlantAddress, ContactPerson, MobileNo, Remarks)
      VALUES (@PlantName, @PlantAddress, @ContactPerson, @MobileNo, @Remarks)
    `);
    res.sendStatus(201);
  } catch (err) {
    console.error('Error saving plant:', err);
    res.status(500).send('Server error');
  }
});

// 🔹 PUT to update existing plant
app.put('/api/plantmaster/update/:id', async (req, res) => {
  const plantId = req.params.id;
  const { plantName, plantAddress, contactPerson, mobileNo, remarks } = req.body;

  try {
    await sql.connect(dbConfig);
    const request = new sql.Request();
    request.input('PlantID', sql.Int, plantId);
    request.input('PlantName', sql.VarChar, plantName);
    request.input('PlantAddress', sql.VarChar, plantAddress);
    request.input('ContactPerson', sql.VarChar, contactPerson);
    request.input('MobileNo', sql.VarChar, mobileNo);
    request.input('Remarks', sql.VarChar, remarks);

    await request.query(`
      UPDATE PlantMaster
      SET PlantName = @PlantName,
          PlantAddress = @PlantAddress,
          ContactPerson = @ContactPerson,
          MobileNo = @MobileNo,
          Remarks = @Remarks
      WHERE PlantID = @PlantID
    `);
    res.sendStatus(200);
  } catch (err) {
    console.error('Error updating plant:', err);
    res.status(500).send('Server error');
  }
});


// // 🌱 Plant Master API
// app.post("/api/plantmaster", async (req, res) => {
//   const { plantName, plantAddress, contactPerson, mobileNo, remarks } =
//     req.body;

//   if (!plantName) {
//     return res.status(400).json({ message: "PlantName is required" });
//   }

//   try {
//     const pool = await sql.connect(dbConfig);
//     await pool
//       .request()
//       .input("PlantName", sql.VarChar(200), plantName)
//       .input("PlantAddress", sql.VarChar(sql.MAX), plantAddress || "")
//       .input("ContactPerson", sql.VarChar(200), contactPerson || "")
//       .input("MobileNo", sql.VarChar(50), mobileNo || "")
//       .input("Remarks", sql.VarChar(sql.MAX), remarks || "").query(`
//         INSERT INTO PlantMaster (PlantName, PlantAddress, ContactPerson, MobileNo, Remarks)
//         VALUES (@PlantName, @PlantAddress, @ContactPerson, @MobileNo, @Remarks)
//       `);

//     res.status(200).json({ message: "Plant details submitted successfully." });
//   } catch (error) {
//     console.error("Insert error:", error);
//     res.status(500).json({ message: "Error inserting plant details" });
//   }
// });

app.get("/api/plants", async (req, res) => {
  try {
    const pool = await getPool();
    const result = await pool
      .request()
      .query("SELECT PlantName FROM PlantMaster");
    const plantNames = result.recordset.map((row) => row.PlantName);
    res.json(plantNames);
  } catch (error) {
    console.error("Error fetching plants:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// 🚚 Truck Transaction API
app.post("/api/truck-transaction", async (req, res) => {
  const { formData, tableData } = req.body;

  try {
    const pool = await getPool();
    const transaction = new sql.Transaction(pool);
    await transaction.begin();

    // Insert into TruckTransactionMaster
    const insertMain = await transaction
      .request()
      .input("TruckNo", sql.VarChar, formData.truckNo)
      .input("TransactionDate", sql.Date, formData.transactionDate)
      .input("CityName", sql.VarChar, formData.cityName)
      .input("Transporter", sql.VarChar, formData.transporter)
      .input("AmountPerTon", sql.Decimal(10, 2), formData.amountPerTon)
      .input("TruckWeight", sql.Decimal(10, 2), formData.truckWeight)
      .input("DeliverPoint", sql.VarChar, formData.deliverPoint)
      .input("Remarks", sql.VarChar, formData.remarks).query(`
        INSERT INTO TruckTransactionMaster
        (TruckNo, TransactionDate, CityName, Transporter, AmountPerTon, TruckWeight, DeliverPoint, Remarks, CreatedAt)
        OUTPUT INSERTED.TransactionID
        VALUES (@TruckNo, @TransactionDate, @CityName, @Transporter, @AmountPerTon, @TruckWeight, @DeliverPoint, @Remarks, GETDATE())
      `);

    const transactionId = insertMain.recordset[0].TransactionID;

    // Insert into TruckTransactionDetails
    for (const row of tableData) {
      const plantResult = await transaction
        .request()
        .input("PlantName", sql.VarChar, row.plantName)
        .query(`SELECT PlantId FROM PlantMaster WHERE PlantName = @PlantName`);

      const plantId = plantResult.recordset[0]?.PlantId;

      if (!plantId) {
        throw new Error(`Plant not found: ${row.plantName}`);
      }

      await transaction
        .request()
        .input("TransactionID", sql.Int, transactionId)
        .input("PlantId", sql.Int, plantId)
        .input("LoadingSlipNo", sql.VarChar, row.loadingSlipNo)
        .input("Qty", sql.Decimal(10, 2), row.qty)
        .input("Priority", sql.VarChar, row.priority)
        .input("Remarks", sql.VarChar, row.remarks || "")
        .input("Freight", sql.VarChar, row.freight).query(`
          INSERT INTO TruckTransactionDetails
          (TransactionID, PlantId, LoadingSlipNo, Qty, Priority, Remarks, Freight)
          VALUES (@TransactionID, @PlantId, @LoadingSlipNo, @Qty, @Priority, @Remarks, @Freight)
        `);
    }

    await transaction.commit();
    res.json({ success: true });
  } catch (error) {
    console.error("Transaction failed:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// 🚚 Fetch Truck Numbers API
app.get("/api/trucks", async (req, res) => {
  const { plantName } = req.query;
  try {
    const pool = await getPool();

    const result = await pool.request().input("plantName", plantName).query(`
   SELECT DISTINCT m.TruckNo
FROM PlantMaster p
JOIN TruckTransactionDetails d ON p.PlantID = d.PlantId
JOIN TruckTransactionMaster m ON d.TransactionId = m.TransactionID
WHERE p.PlantName = @plantName
  AND d.CheckInStatus = 0
  AND m.Completed = 0

  `);

    res.json(result.recordset);
  } catch (error) {
    console.error("Error fetching truck numbers:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// 🚚 Update Truck Status API

app.post("/api/update-truck-status", async (req, res) => {
  const { truckNo, plantName, type } = req.body;

  try {
    const pool = await getPool();

    const transactionResult = await pool
      .request()
      .input("truckNo", sql.VarChar, truckNo).query(`
        SELECT TOP 1 TransactionID 
        FROM TruckTransactionMaster 
        WHERE TruckNo = @truckNo AND Completed = 0
        ORDER BY TransactionID DESC
      `);

    if (transactionResult.recordset.length === 0) {
      return res.status(404).json({ message: "❌ Truck not found or already completed" });
    }

    const transactionId = transactionResult.recordset[0].TransactionID;

    const plantResult = await pool
      .request()
      .input("plantName", sql.VarChar, plantName).query(`
        SELECT TOP 1 PlantId 
        FROM PlantMaster 
        WHERE PlantName = @plantName
      `);

    if (plantResult.recordset.length === 0) {
      return res.status(404).json({ message: "❌ Plant not found" });
    }

    const plantId = plantResult.recordset[0].PlantId;

    const statusResult = await pool
      .request()
      .input("PlantId", sql.Int, plantId)
      .input("TransactionID", sql.Int, transactionId).query(`
        SELECT CheckInStatus, CheckOutStatus
        FROM TruckTransactionDetails
        WHERE PlantId = @PlantId AND TransactionID = @TransactionID
      `);

    if (statusResult.recordset.length === 0) {
      return res.status(404).json({ message: "❌ Truck detail not found for this plant" });
    }

    const status = statusResult.recordset[0];

    if (type === "Check In" && status.CheckInStatus === 0) {
      await pool.request()
        .input("PlantId", sql.Int, plantId)
        .input("TransactionID", sql.Int, transactionId)
        .query(`
          UPDATE TruckTransactionDetails
          SET CheckInStatus = 1, CheckInDate = GETDATE()
          WHERE PlantId = @PlantId AND TransactionID = @TransactionID
        `);
    }

    if (type === "Check Out") {
      if (status.CheckInStatus === 0) {
        return res.status(400).json({ message: "❌ Please Check In first" });
      }
      if (status.CheckOutStatus === 0) {
        await pool.request()
          .input("PlantId", sql.Int, plantId)
          .input("TransactionID", sql.Int, transactionId)
          .query(`
            UPDATE TruckTransactionDetails
            SET CheckOutStatus = 1, CheckOutDate = GETDATE()
            WHERE PlantId = @PlantId AND TransactionID = @TransactionID
          `);
      }
    }

    const allStatusResult = await pool
      .request()
      .input("TransactionID", sql.Int, transactionId).query(`
        SELECT COUNT(*) AS TotalPlants,
               SUM(CASE WHEN CheckInStatus = 1 THEN 1 ELSE 0 END) AS CheckedIn,
               SUM(CASE WHEN CheckOutStatus = 1 THEN 1 ELSE 0 END) AS CheckedOut
        FROM TruckTransactionDetails
        WHERE TransactionID = @TransactionID
      `);

    const statusCheck = allStatusResult.recordset[0];

    if (
      statusCheck.TotalPlants === statusCheck.CheckedIn &&
      statusCheck.TotalPlants === statusCheck.CheckedOut
    ) {
      await pool.request()
        .input("TransactionID", sql.Int, transactionId)
        .query(`
          UPDATE TruckTransactionMaster
          SET Completed = 1
          WHERE TransactionID = @TransactionID
        `);
      return res.json({ message: "✅ All plants processed. Truck completed." });
    }

    return res.json({ message: `✅ ${type} successful` });
  } catch (error) {
    console.error("Status update error:", error);
    res.status(500).json({ error: "Server error" });
  }
});


// 🚚 Fetch Checked-in Trucks API
app.get("/api/checked-in-trucks", async (req, res) => {
  const { plantName } = req.query;
  try {
    const pool = await getPool();

    const result = await pool
      .request()
      .input("plantName", sql.VarChar, plantName).query(`
        SELECT DISTINCT m.TruckNo
        FROM PlantMaster p
        JOIN TruckTransactionDetails d ON p.PlantID = d.PlantID
        JOIN TruckTransactionMaster m ON d.TransactionID = m.TransactionID
        WHERE p.PlantName = @plantName
          AND d.CheckInStatus = 1
          AND d.CheckOutStatus = 0
      `);

    res.json(result.recordset);
  } catch (error) {
    console.error("Error fetching truck numbers:", error);
    res.status(500).json({ error: "Server error" });
  }
});




// // ✅ Corrected: Fetch latest remark from TruckTransactionDetails based on TruckNo only
// app.get("/api/get-remark", async (req, res) => {
//   const { truckNo, plantName } = req.query;

//   try {
//     const pool = await getPool();

//     const result = await pool.request()
//       .input("truckNo", sql.VarChar, truckNo)
//       .input("plantName", sql.VarChar, plantName)
//       .query(`
//         SELECT TOP 1 d.Remark
//         FROM TruckTransactionDetails d
//         INNER JOIN TruckTransactionMaster m ON d.TransactionID = m.TransactionID
//         INNER JOIN PlantMaster p ON d.PlantID = p.PlantID
//         WHERE m.TruckNo = @truckNo
//           AND p.PlantName = @plantName
//           AND d.Remark IS NOT NULL
//         ORDER BY d.Id DESC
//       `);

//     if (result.recordset.length > 0) {
//       res.json({ remark: result.recordset[0].Remark });
//     } else {
//       res.status(404).json({ message: "❌ No remark found for this truck and plant." });
//     }
//   } catch (error) {
//     console.error("Error fetching remark:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });







/////////////////////////////////////////////////////////////////////////////////////////////////////////////



// // ✅ Get all plants
// app.get("/api/plants", async (req, res) => {
//   try {
//     const pool = await getPool();
//     const result = await pool.request().query("SELECT * FROM PlantMaster");
//     res.json(result.recordset);
//   } catch (error) {
//     console.error("Error fetching plants:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // ✅ Get single plant by name
// app.get("/api/plant", async (req, res) => {
//   const { plantName } = req.query;
//   try {
//     const pool = await getPool();
//     const result = await pool.request()
//       .input("plantName", sql.VarChar, plantName)
//       .query("SELECT * FROM PlantMaster WHERE PlantName = @plantName");

//     if (result.recordset.length > 0) {
//       res.json(result.recordset[0]);
//     } else {
//       res.status(404).json({ message: "❌ Plant not found." });
//     }
//   } catch (error) {
//     console.error("Error fetching plant:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // ✅ Update plant details
// app.put("/api/update-plant", async (req, res) => {
//   const { plantId, plantName, plantAddress, contactPerson, mobileNo, remarks } = req.body;
//   try {
//     const pool = await getPool();
//     await pool.request()
//       .input("plantId", sql.Int, plantId)
//       .input("plantName", sql.VarChar, plantName)
//       .input("plantAddress", sql.VarChar, plantAddress)
//       .input("contactPerson", sql.VarChar, contactPerson)
//       .input("mobileNo", sql.VarChar, mobileNo)
//       .input("remarks", sql.VarChar, remarks)
//       .query(`
//         UPDATE PlantMaster
//         SET PlantName = @plantName,
//             PlantAddress = @plantAddress,
//             ContactPerson = @contactPerson,
//             MobileNo = @mobileNo,
//             Remarks = @remarks
//         WHERE PlantID = @plantId
//       `);

//     res.json({ message: "✅ Plant updated successfully." });
//   } catch (error) {
//     console.error("Error updating plant:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// });












app.get('/api/fetch-remarks', async (req, res) => {
  const { plantName, truckNo } = req.query;

  try {
    const pool = await getPool();

    // Step 1: Get PlantID
    const plantResult = await pool.request()
      .input('plantName', sql.VarChar, plantName)
      .query('SELECT PlantID FROM PlantMaster WHERE PlantName = @plantName');
    
    if (plantResult.recordset.length === 0) {
      return res.status(404).json({ message: 'Plant not found' });
    }
    const plantId = plantResult.recordset[0].PlantID;

    // Step 2: Get TransactionID
    const txnResult = await pool.request()
      .input('truckNo', sql.VarChar, truckNo)
      .query('SELECT TransactionID FROM TruckTransactionMaster WHERE TruckNo = @truckNo');
    
    if (txnResult.recordset.length === 0) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    const transactionId = txnResult.recordset[0].TransactionID;

    // Step 3: Fetch Remarks
    const remarksResult = await pool.request()
      .input('plantId', sql.Int, plantId)
      .input('transactionId', sql.Int, transactionId)
      .query(`
        SELECT Remarks 
        FROM TruckTransactionDetails 
        WHERE PlantID = @plantId AND TransactionID = @transactionId
      `);

    if (remarksResult.recordset.length === 0) {
      return res.status(404).json({ message: 'Remarks not found' });
    }

    const remarks = remarksResult.recordset[0].Remarks;
    res.json({ remarks });

  } catch (error) {
    console.error('Error fetching remarks:', error);
    res.status(500).json({ error: 'Server error' });
  }
});



app.get('/api/fetch-qty', async (req, res) => {
  const { plantName, truckNo } = req.query;

  try {
    const pool = await getPool();

    // Step 1: Get PlantID
    const plantResult = await pool.request()
      .input('plantName', sql.VarChar, plantName)
      .query('SELECT PlantID FROM PlantMaster WHERE PlantName = @plantName');

    if (plantResult.recordset.length === 0) {
      return res.status(404).json({ message: 'Plant not found' });
    }
    const plantId = plantResult.recordset[0].PlantID;

    // Step 2: Get TransactionID
    const txnResult = await pool.request()
      .input('truckNo', sql.VarChar, truckNo)
      .query('SELECT TransactionID FROM TruckTransactionMaster WHERE TruckNo = @truckNo');

    if (txnResult.recordset.length === 0) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    const transactionId = txnResult.recordset[0].TransactionID;

    // Step 3: Fetch Quantity
    const quantityResult = await pool.request()
      .input('plantId', sql.Int, plantId)
      .input('transactionId', sql.Int, transactionId)
      .query(`
        SELECT qty
        FROM TruckTransactionDetails 
        WHERE PlantID = @plantId AND TransactionID = @transactionId
      `);

    if (quantityResult.recordset.length === 0) {
      return res.status(404).json({ message: 'Quantity not found' });
    }

    const quantity = quantityResult.recordset[0].qty;
    res.json({ quantity });

  } catch (error) {
    console.error('Error fetching quantity:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// ✅ Frontend Code (React)

app.get('/api/trucksNo', async (req, res) => {
  try {
    const pool = await getPool();
    const result = await pool.request().query(`SELECT DISTINCT TruckNo FROM TruckTransactionMaster WHERE TruckNo IS NOT NULL`);
    res.json(result.recordset);
  } catch (error) {
    console.error('Error fetching truck numbers:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});






















// Assuming `pool` is already defined for MSSQL connection

// Inside server.js
// app.get('/api/report/:truckNo', async (req, res) => {
//   const { truckNo } = req.params;

//   try {
//     const result = await pool
//       .request()
//       .input('truckNo', truckNo)
//       .query(`
//         SELECT 
//           d.TransactionId,
//           d.CheckInDate,
//           d.CheckOutDate
//         FROM TruckTransactionDetails d
//         INNER JOIN TruckTransactionMaster m
//           ON d.TransactionId = m.TransactionID
//         WHERE m.TruckNo = @truckNo
//           AND m.Completed = 0
//       `);

//     const formattedData = result.recordset.map(row => ({
//       transactionId: row.TransactionId,
//       checkIn: row.CheckInDate ? new Date(row.CheckInDate).toLocaleString() : '',
//       checkOut: row.CheckOutDate ? new Date(row.CheckOutDate).toLocaleString() : '',
//     }));

//     res.json(formattedData);
//   } catch (err) {
//     console.error('Error fetching report:', err);
//     res.status(500).json({ error: 'Failed to fetch report data' });
//   }
// });

// app.get('/api/report/:truckNo', async (req, res) => {
//   const truckNo = decodeURIComponent(req.params.truckNo.trim()); // 🧠 decode & trim

//   try {
//     const result = await pool
//       .request()
//       .input('truckNo', truckNo)
//       .query(`
//         SELECT 
//           d.TransactionId,
//           d.CheckInDate,
//           d.CheckOutDate
//         FROM TruckTransactionDetails d
//         INNER JOIN TruckTransactionMaster m
//           ON d.TransactionId = m.TransactionID
//         WHERE m.TruckNo = @truckNo
//           AND m.Completed = 0
//       `);

//     const formattedData = result.recordset.map(row => ({
//       transactionId: row.TransactionId,
//       checkIn: row.CheckInDate ? new Date(row.CheckInDate).toLocaleString() : '',
//       checkOut: row.CheckOutDate ? new Date(row.CheckOutDate).toLocaleString() : '',
//     }));

//     res.json(formattedData);
//   } catch (err) {
//     console.error('Error fetching report:', err); // 🛠️ Check terminal logs
//     res.status(500).json({ error: 'Failed to fetch report data' });
//   }
// });
// app.get('/api/report/:truckNo', async (req, res) => {
//   const truckNo = decodeURIComponent(req.params.truckNo.trim());

//   try {
//     const result = await pool
//   .request()
//   .input('truckNo', truckNo)
//   .query(`
//     SELECT 
//       d.TransactionId,
//       d.CheckInDate,
//       d.CheckOutDate,
//       d.PlantID,
//       p.PlantName
//     FROM TruckTransactionDetails d
//     INNER JOIN TruckTransactionMaster m ON d.TransactionId = m.TransactionID
//     LEFT JOIN PlantMaster p ON d.PlantID = p.PlantID
//     WHERE m.TruckNo = @truckNo AND m.Completed = 0
//   `);

//   const formattedData = result.recordset.map(row => ({
//     transactionId: row.TransactionId,
//     plantName: row.PlantName || 'N/A',
//     checkIn: row.CheckInDate
//       ? new Date(row.CheckInDate).toLocaleString('en-IN', {
//           timeZone: 'Asia/Kolkata', // ✅ Convert to IST
//           year: 'numeric',
//           month: 'short',
//           day: 'numeric',
//           hour: '2-digit',
//           minute: '2-digit',
//           hour12: true,
//         })
//       : '',
//     checkOut: row.CheckOutDate
//       ? new Date(row.CheckOutDate).toLocaleString('en-IN', {
//           timeZone: 'Asia/Kolkata', // ✅ Convert to IST
//           year: 'numeric',
//           month: 'short',
//           day: 'numeric',
//           hour: '2-digit',
//           minute: '2-digit',
//           hour12: true,
//         })
//       : '',
//   }));
  

//     res.json(formattedData);
//   } catch (err) {
//     console.error('❌ Error fetching report:', err);
//     res.status(500).json({ error: 'Failed to fetch report data' });
//   }
// });






















app.get('/api/report/:truckNo', async (req, res) => {
  const truckNo = decodeURIComponent(req.params.truckNo.trim());

  try {
    const result = await pool
      .request()
      .input('truckNo', truckNo)
      .query(`
        SELECT 
          d.TransactionId,
          d.CheckInDate,
          d.CheckOutDate,
          d.PlantID,
          p.PlantName
        FROM TruckTransactionDetails d
        INNER JOIN TruckTransactionMaster m ON d.TransactionId = m.TransactionID
        LEFT JOIN PlantMaster p ON d.PlantID = p.PlantID
        WHERE m.TruckNo = @truckNo AND m.Completed = 0
      `);

    const formattedData = result.recordset.map(row => ({
      transactionId: row.TransactionId,
      plantName: row.PlantName || 'N/A',
      checkIn: row.CheckInDate
        ? row.CheckInDate.toISOString().replace('T', ' ').substring(0, 23)
        : '',
      checkOut: row.CheckOutDate
        ? row.CheckOutDate.toISOString().replace('T', ' ').substring(0, 23)
        : '',
    }));

    res.json(formattedData);
  } catch (err) {
    console.error('❌ Error fetching report:', err);
    res.status(500).json({ error: 'Failed to fetch report data' });
  }
});


// 🚀 Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
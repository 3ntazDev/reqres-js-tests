const axios = require('axios');
const { expect } = require('chai');

const BASE_URL = 'https://jsonplaceholder.typicode.com'; // API أكثر استقراراً

describe('User API Tests - كود محدث', function() {
  // زيادة timeout للشبكة
  this.timeout(10000);

  // Test Case 1: GET user صحيح (Valid)
  it('GET user موجود - Valid', async () => {
    const res = await axios.get(`${BASE_URL}/users/1`);
    
    expect(res.status).to.equal(200);
    expect(res.data).to.have.property('id', 1);
    expect(res.data).to.have.property('name');
    expect(res.data).to.have.property('email');
    expect(res.data).to.have.property('username');
    
    console.log('✅ GET Valid - User Data:', {
      id: res.data.id,
      name: res.data.name,
      email: res.data.email
    });
  });

  // Test Case 2: GET user غير موجود (Invalid)
  it('GET user غير موجود - Invalid', async () => {
    try {
      await axios.get(`${BASE_URL}/users/9999`); // ID غير موجود
      // إذا وصل هنا يعني لم يتم رمي error، وهذا غير متوقع
      expect.fail('كان من المفترض أن يفشل الطلب');
    } catch (err) {
      // نتحقق من أن الطلب فشل بـ 404
      expect(err.response.status).to.equal(404);
      console.log('✅ GET Invalid - تم الحصول على 404 كما هو متوقع');
    }
  });

  // Test Case 3: POST إنشاء مستخدم جديد
  it('POST إنشاء مستخدم جديد', async () => {
    const userData = {
      name: 'Ahmed Mohamed',
      email: 'ahmed.mohamed@example.com',
      username: 'ahmedmohamed',
      phone: '0123456789',
      website: 'ahmed.org'
    };

    const res = await axios.post(`${BASE_URL}/users`, userData);
    
    expect(res.status).to.equal(201);
    expect(res.data).to.have.property('id');
    expect(res.data).to.have.property('name', userData.name);
    expect(res.data).to.have.property('email', userData.email);
    
    console.log('✅ POST User - تم إنشاء مستخدم جديد:', {
      id: res.data.id,
      name: res.data.name,
      email: res.data.email
    });
  });
});
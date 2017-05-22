import base64

from io import BytesIO
from django.http import JsonResponse
from rest_framework.views import APIView

from qrlocker.qr.utils import generate_qr_code


class QRView(APIView):
    """
    API endpoint that allows users to be viewed or edited.
    """
    def get(self, request):
        payload = str({
            'author': 'Komarov Valentin',
            'version': '0.0.1a',
            'request_data': 'some_unreal_data'
        })
        qr = generate_qr_code(payload, 10, 2)

        buffer = BytesIO()
        qr.save(buffer, format='PNG')
        img_str = base64.b64encode(buffer.getvalue()).decode()
        # response = HttpResponse(content_type="image/png")
        # qr.save(response, "PNG")
        encoded_response = 'data:image/png;base64,{}'.format(img_str)
        return JsonResponse({'img': encoded_response})
